# Docker 설정 가이드

이 문서는 maccrey-portfolio 프로젝트를 Docker로 실행하는 방법을 설명합니다.

## 목차

- [Docker란?](#docker란)
- [Docker 설치](#docker-설치)
- [프로젝트 실행 방법](#프로젝트-실행-방법)
- [주요 명령어](#주요-명령어)
- [문제 해결](#문제-해결)
- [외부 접속 설정](#외부-접속-설정)

---

## Docker란?

Docker는 애플리케이션을 컨테이너라는 격리된 환경에서 실행할 수 있게 해주는 플랫폼입니다.

### 장점

- **일관된 환경**: 개발 환경과 운영 환경이 동일
- **간편한 배포**: Node.js나 다른 도구를 직접 설치할 필요 없음
- **격리성**: 다른 프로젝트와 독립적으로 실행
- **이식성**: 어떤 컴퓨터에서도 동일하게 동작

---

## Docker 설치

### Windows

1. [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/) 다운로드
2. 설치 파일 실행
3. 재부팅 후 Docker Desktop 실행
4. WSL 2 설치 안내가 나오면 따라서 설치

### macOS

1. [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/) 다운로드
2. `.dmg` 파일을 열어 Applications 폴더로 드래그
3. Docker Desktop 실행

### Linux (Ubuntu/Debian)

```bash
# 1. 기존 Docker 제거
sudo apt-get remove docker docker-engine docker.io containerd runc

# 2. 필수 패키지 설치
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release

# 3. Docker 공식 GPG 키 추가
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 4. Docker 저장소 추가
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 5. Docker 설치
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 6. 사용자를 docker 그룹에 추가 (sudo 없이 사용)
sudo usermod -aG docker $USER
newgrp docker
```

### 설치 확인

```bash
# Docker 버전 확인
docker --version

# Docker Compose 버전 확인
docker compose version
```

---

## 프로젝트 실행 방법

### 방법 1: Docker Compose 사용 (권장)

Docker Compose는 여러 컨테이너를 한 번에 관리할 수 있는 도구입니다.

#### 1. 프로젝트 디렉토리로 이동

```bash
cd /path/to/maccrey-profile
```

#### 2. 빌드 및 실행

```bash
# 백그라운드에서 실행
docker compose up -d

# 또는 로그를 보면서 실행 (Ctrl+C로 중지)
docker compose up
```

#### 3. 실행 확인

브라우저에서 `http://localhost:3500` 접속

#### 4. 로그 확인

```bash
# 실시간 로그 보기
docker compose logs -f

# 최근 로그 100줄만 보기
docker compose logs --tail=100
```

#### 5. 중지 및 삭제

```bash
# 컨테이너 중지
docker compose stop

# 컨테이너 중지 및 삭제
docker compose down

# 컨테이너, 이미지, 볼륨 모두 삭제
docker compose down --rmi all --volumes
```

---

### 방법 2: Docker 명령어로 직접 실행

#### 1. 이미지 빌드

```bash
docker build -t maccrey-portfolio .
```

- `-t maccrey-portfolio`: 이미지 이름 지정
- `.`: 현재 디렉토리의 Dockerfile 사용

#### 2. 컨테이너 실행

```bash
docker run -d \
  --name maccrey-portfolio \
  -p 3500:3500 \
  --restart unless-stopped \
  maccrey-portfolio
```

옵션 설명:

- `-d`: 백그라운드에서 실행 (detached mode)
- `--name`: 컨테이너 이름 지정
- `-p 3500:3500`: 포트 매핑 (호스트 포트:컨테이너 포트)
- `--restart unless-stopped`: 자동 재시작 설정

#### 3. 실행 중인 컨테이너 확인

```bash
docker ps
```

#### 4. 로그 확인

```bash
# 실시간 로그
docker logs -f maccrey-portfolio

# 최근 로그 100줄
docker logs --tail=100 maccrey-portfolio
```

#### 5. 컨테이너 중지 및 삭제

```bash
# 중지
docker stop maccrey-portfolio

# 삭제
docker rm maccrey-portfolio

# 중지하고 바로 삭제
docker rm -f maccrey-portfolio
```

---

## 주요 명령어

### 컨테이너 관리

```bash
# 실행 중인 컨테이너 목록
docker ps

# 모든 컨테이너 목록 (중지된 것 포함)
docker ps -a

# 컨테이너 시작
docker start maccrey-portfolio

# 컨테이너 재시작
docker restart maccrey-portfolio

# 컨테이너 내부 접속 (쉘)
docker exec -it maccrey-portfolio sh

# 컨테이너 리소스 사용량 확인
docker stats maccrey-portfolio
```

### 이미지 관리

```bash
# 이미지 목록
docker images

# 이미지 삭제
docker rmi maccrey-portfolio

# 사용하지 않는 이미지 모두 삭제
docker image prune -a

# 빌드 캐시 삭제
docker builder prune
```

### 시스템 정리

```bash
# 중지된 컨테이너, 사용하지 않는 네트워크, 이미지 등 정리
docker system prune

# 모든 것 정리 (볼륨 포함)
docker system prune -a --volumes

# 디스크 사용량 확인
docker system df
```

---

## 문제 해결

### 1. 포트가 이미 사용 중입니다

```
Error: bind: address already in use
```

**해결 방법:**

```bash
# 포트를 사용 중인 프로세스 확인 (macOS/Linux)
lsof -i :3500

# 포트를 사용 중인 프로세스 확인 (Windows)
netstat -ano | findstr :3500

# 프로세스 종료 후 다시 시도
# 또는 다른 포트 사용
docker compose down
# docker-compose.yml에서 포트 변경 (예: 3501:3501)
```

### 2. 빌드가 실패합니다

```
Error: failed to solve: process "/bin/sh -c npm ci" did not complete successfully
```

**해결 방법:**

```bash
# 빌드 캐시 없이 다시 빌드
docker compose build --no-cache

# 또는
docker build --no-cache -t maccrey-portfolio .
```

### 3. 컨테이너가 자동으로 중지됩니다

**확인 방법:**

```bash
# 로그에서 에러 확인
docker logs maccrey-portfolio

# 컨테이너 상태 확인
docker ps -a
```

**일반적인 원인:**

- Node.js 빌드 실패
- 포트 충돌
- 메모리 부족

### 4. Docker Desktop이 시작되지 않습니다

**Windows:**

- WSL 2가 제대로 설치되었는지 확인
- BIOS에서 가상화가 활성화되었는지 확인

**macOS:**

- Rosetta 2 설치 (M1/M2 칩): `softwareupdate --install-rosetta`

**공통:**

- Docker Desktop 재설치
- 컴퓨터 재부팅

### 5. 권한 오류 (Linux)

```
permission denied while trying to connect to the Docker daemon socket
```

**해결 방법:**

```bash
# 현재 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER

# 로그아웃 후 다시 로그인
# 또는
newgrp docker
```

---

## 외부 접속 설정

기본적으로 이 프로젝트는 외부에서 접속 가능하도록 설정되어 있습니다.

### 포트 설정 설명

현재 프로젝트는 **3500번 포트**를 사용하도록 설정되어 있습니다:

- **호스트 포트**: 3500 (외부에서 접속하는 포트)
- **컨테이너 포트**: 3500 (Docker 컨테이너 내부 Next.js 실행 포트)
- **포트 매핑**: `3500:3500` (호스트:컨테이너)

이렇게 포트를 동일하게 설정하면 혼란을 줄이고 관리가 쉬워집니다.

### 로컬 네트워크에서 접속

1. **서버의 IP 주소 확인**

   ```bash
   # macOS/Linux
   ifconfig | grep inet

   # Windows
   ipconfig
   ```

2. **같은 네트워크의 다른 기기에서 접속**
   ```
   http://<서버IP>:3500
   예: http://192.168.0.100:3500
   ```

### 인터넷을 통한 외부 접속

#### 방법 1: 포트 포워딩 (공유기 설정)

1. 공유기 관리 페이지 접속 (보통 192.168.0.1 또는 192.168.1.1)
2. 포트 포워딩 설정
   - 외부 포트: 3500
   - 내부 IP: 서버 IP
   - 내부 포트: 3500
3. 공인 IP로 접속: `http://<공인IP>:3500`

**공인 IP 확인:**

```bash
curl ifconfig.me
```

#### 방법 2: 클라우드 서비스 (권장)

- **AWS EC2**: 보안 그룹에서 3500 포트 개방
- **Google Cloud**: 방화벽 규칙에서 3500 포트 허용
- **Azure**: 네트워크 보안 그룹에서 3500 포트 허용

#### 방법 3: 터널링 서비스 (개발/테스트용)

```bash
# ngrok 사용
ngrok http 3500

# Cloudflare Tunnel 사용
cloudflared tunnel --url http://localhost:3500
```

### 보안 권장 사항

1. **프로덕션 환경에서는 HTTPS 사용**

   - Nginx 리버스 프록시 + Let's Encrypt SSL

2. **방화벽 설정**

   ```bash
   # Ubuntu/Debian
   sudo ufw allow 3500/tcp
   sudo ufw enable
   ```

3. **환경 변수로 민감한 정보 관리**

   ```yaml
   # docker-compose.yml
   environment:
     - DATABASE_URL=${DATABASE_URL}
   ```

   `.env` 파일 생성:

   ```
   DATABASE_URL=your_database_url
   ```

---

## 업데이트 및 재배포

### 코드 변경 후 재배포

```bash
# 1. 기존 컨테이너 중지 및 삭제
docker compose down

# 2. 새로 빌드하고 실행
docker compose up -d --build

# 또는 한 줄로
docker compose up -d --build --force-recreate
```

### 이미지만 다시 빌드

```bash
docker compose build --no-cache
```

---

## 성능 최적화 팁

### 1. 빌드 캐시 활용

Dockerfile의 레이어 순서를 최적화하여 빌드 시간 단축

### 2. 멀티 스테이지 빌드

현재 Dockerfile은 이미 멀티 스테이지 빌드를 사용하여 최종 이미지 크기를 최소화

### 3. .dockerignore 활용

불필요한 파일을 빌드 컨텍스트에서 제외하여 빌드 속도 향상

### 4. 리소스 제한 설정

```yaml
# docker-compose.yml
services:
  maccrey-portfolio:
    # ...
    deploy:
      resources:
        limits:
          cpus: "1"
          memory: 1G
        reservations:
          cpus: "0.5"
          memory: 512M
```

---

## 추가 리소스

- [Docker 공식 문서](https://docs.docker.com/)
- [Docker Compose 문서](https://docs.docker.com/compose/)
- [Next.js Docker 배포 가이드](https://nextjs.org/docs/deployment#docker-image)

---

## 요약: 빠른 시작

```bash
# 1. 프로젝트 디렉토리로 이동
cd /path/to/maccrey-profile

# 2. Docker 컨테이너 실행
docker compose up -d

# 3. 브라우저에서 확인
# http://localhost:3500

# 4. 로그 확인 (문제 발생 시)
docker compose logs -f

# 5. 중지
docker compose down
```

개발서버 시작
npm run dev

질문이나 문제가 있으면 Issue를 등록해주세요!
