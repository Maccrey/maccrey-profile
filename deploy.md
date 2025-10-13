# Cloudtype 배포 가이드

이 문서는 Cloudtype에 Next.js 애플리케이션을 Docker를 사용하여 배포하는 방법을 안내합니다.

## 사전 준비

- Cloudtype 계정
- Docker Hub 계정
- 배포할 Next.js 애플리케이션이 있는 GitHub 저장소

## 1. Dockerfile 작성

프로젝트 루트에 다음과 같이 `Dockerfile`을 작성합니다. 이 `Dockerfile`은 멀티-스테이지 빌드를 사용하여 최종 이미지 크기를 줄이고 보안을 강화합니다.

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY maccrey-portfolio/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY maccrey-portfolio/ ./

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.* ./
COPY --from=builder /app/data ./data

# Install production dependencies only
RUN npm ci --only=production

# Expose port
EXPOSE 3500

# Set environment variables for external access
ENV PORT=3500
ENV HOSTNAME=0.0.0.0

# Start the application
CMD ["npm", "start"]
```

## 2. Docker 이미지 빌드 및 푸시

로컬 환경에서 Docker 이미지를 빌드하고 Docker Hub에 푸시합니다.

```bash
# 1. Docker 이미지 빌드
docker build -t {your-dockerhub-username}/{your-repo-name}:latest .

# 2. Docker Hub 로그인
docker login

# 3. Docker 이미지 푸시
docker push {your-dockerhub-username}/{your-repo-name}:latest
```

`{your-dockerhub-username}`과 `{your-repo-name}`을 자신의 Docker Hub 사용자 이름과 리포지토리 이름으로 변경해주세요.

## 3. Cloudtype 설정

### 3.1. Docker Hub 연동

1. Cloudtype에 로그인한 후, **"환경설정"** > **"통합 기능"** > **"컨테이너 저장소"**로 이동합니다.
2. Docker Hub 계정을 연결합니다. (비밀번호 대신 Access Token을 사용해야 합니다.)

### 3.2. 새 서비스 생성

1. 새 프로젝트를 생성하거나 기존 프로젝트에 서비스를 추가합니다.
2. 배포 방법으로 **"Docker Image"**를 선택합니다.
3. 이미지 이름 (`{your-dockerhub-username}/{your-repo-name}`)과 태그 (`latest`)를 입력합니다.

### 3.3. 환경 변수 설정

Cloudtype의 **"설정"** > **"환경 변수"**에서 애플리케이션에 필요한 환경 변수를 설정합니다.

- `PORT`: `3500`
- `NODE_ENV`: `production`

### 3.4. 영구 볼륨 설정

방문자 수를 영구적으로 저장하기 위해 볼륨을 설정해야 합니다.

1. 서비스 설정에서 **"볼륨"** 탭으로 이동합니다.
2. 다음과 같이 볼륨을 추가합니다.
   - **마운트 경로**: `/app/data`
   - **볼륨 크기**: (필요에 따라 설정, 예: 1GB)

## 4. 배포

설정을 완료한 후, **"배포"** 버튼을 클릭하여 배포를 시작합니다. Cloudtype이 Docker Hub에서 이미지를 가져와 실행합니다.
