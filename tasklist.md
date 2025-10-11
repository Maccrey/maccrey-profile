# 🧾 Maccrey Developer Portfolio Site - Task List

> PRD 문서를 기반으로 각 기능 구현, 테스트, 정리, 버전 관리까지의 과정을 명확히 정의합니다.

---

## 🧱 1. 프로젝트 초기 설정

- [x] **Next.js 프로젝트 생성**: `npx create-next-app@latest maccrey-portfolio --typescript --tailwind --eslint`
- [x] **Prettier 설정**: Prettier 및 관련 플러그인 설치 (`npm install --save-dev prettier prettier-plugin-tailwindcss`) 후 `.prettierrc` 파일 생성
- [x] **폰트 설정**: `next/font`를 사용하여 Pretendard와 Inter 폰트 전역 적용
- [x] **기본 아이콘 및 메타데이터 설정**: `favicon.ico` 교체 및 `layout.tsx`에서 기본 metadata ("Maccrey Developer Portfolio", "세상에 존재하지 않는 서비스는 내가 만든다.") 설정
- [x] **초기 설정 커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Initial project setup with Next.js, TypeScript, and TailwindCSS"`

---

## 🧩 2. 기본 레이아웃 및 페이지 구조 생성

- [x] **페이지 파일 생성**:
    - [x] `app/page.tsx` (Home)
    - [x] `app/about/page.tsx`
    - [x] `app/projects/page.tsx`
    - [x] `app/blog/page.tsx`
    - [x] `app/contact/page.tsx`
- [x] **공통 레이아웃 컴포넌트 생성**:
    - [x] `components/Header.tsx`: 로고, 네비게이션 메뉴 (Home, About, Projects, Blog, Contact) 포함
    - [x] `components/Footer.tsx`: `© 2025 Maccrey. All rights reserved.` 포함
    - [x] `app/layout.tsx`에 `Header`와 `Footer` 적용
- [ ] **테스트**:
    - [ ] `tests/layout.spec.ts` 파일 생성
    - [ ] 테스트 내용: 각 페이지로 이동했을 때 Header와 Footer가 정상적으로 렌더링되는지 확인
    - [ ] `npx playwright test tests/layout.spec.ts` 실행하여 테스트 통과 확인
- [ ] **정리**:
    - [ ] `rm tests/layout.spec.ts` 실행하여 테스트 파일 삭제
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Setup basic page structure and global layout"`

---

## 🏠 3. Home 섹션 구현

- [x] **히어로 섹션 UI 구현**:
    - [x] PRD 기반 문구 표시: "세상에 존재하지 않는 서비스는 내가 만든다.", 이름, 직업
    - [x] CTA 버튼 2개 (`/projects`, `/blog`로 연결) 스타일링
- [x] **애니메이션 추가**:
    - [x] `framer-motion` 설치 (`npm install framer-motion`)
    - [x] 히어로 섹션 콘텐츠에 부드러운 페이드 인 효과 적용
- [ ] **테스트**:
    - [ ] `tests/home.spec.ts` 파일 생성
    - [ ] 테스트 내용: Home 페이지 접속 시 히어로 문구와 CTA 버튼 2개가 보이는지 확인
    - [ ] `npx playwright test tests/home.spec.ts` 실행하여 테스트 통과 확인
- [ ] **정리**:
    - [ ] `rm tests/home.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement home page hero section with animation"`

---

## 🌙 4. 다크모드 및 공통 기능 구현

- [x] **다크모드 기능 구현**:
    - [x] `next-themes` 설치 (`npm install next-themes`)
    - [x] `ThemeProvider` 설정 및 Header에 다크모드 토글 버튼 추가
- [x] **방문자 수 카운터 UI 추가**:
    - [x] Footer에 "Today: 123 | Total: 1234" 형태의 UI 우선 구현 (기능 연동은 추후)
- [ ] **테스트**:
    - [ ] `tests/common.spec.ts` 파일 생성
    - [ ] 테스트 내용: 다크모드 토글 버튼 클릭 시 `<html>` 태그에 `dark` 클래스가 적용/해제되는지 확인. 방문자 수 UI가 Footer에 표시되는지 확인.
    - [ ] `npx playwright test tests/common.spec.ts` 실행
- [ ] **정리**:
    - [ ] `rm tests/common.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement dark mode toggle and visitor counter UI"`

---

## 🚀 5. Projects 섹션 구현

- [x] **프로젝트 데이터 구조 정의**: `types/project.ts` 파일에 `Project` 타입 정의 (이름, 기술스택, 설명, 링크 등)
- [x] **프로젝트 목업 데이터 생성**: `data/projects.ts` 파일에 PRD 기반 프로젝트 2-3개 목업 데이터 생성
- [x] **프로젝트 카드 UI 구현**: `components/ProjectCard.tsx` 컴포넌트 생성. Hover 시 정보 노출 효과 추가.
- [x] **필터링 기능 구현**:
    - [x] `useState`를 사용하여 현재 선택된 카테고리 상태 관리
    - [x] 카테고리 버튼 (All, Flutter, n8n 등) 클릭 시 프로젝트 목록 필터링
- [ ] **테스트**:
    - [ ] `tests/projects.spec.ts` 파일 생성
    - [ ] 테스트 내용: Projects 페이지 접속 시 프로젝트 카드들이 렌더링되는지 확인. 필터 버튼 클릭 시 카드 목록이 변경되는지 확인.
    - [ ] `npx playwright test tests/projects.spec.ts` 실행
- [ ] **정리**:
    - [ ] `rm tests/projects.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement projects section with filtering functionality"`

---

## 🧠 6. Blog 섹션 구현

- [x] **RSS 파싱 로직 구현**:
    - [x] `rss-parser` 설치 (`npm install rss-parser`)
    - [x] `lib/getBlogPosts.ts` 파일 생성 후 Tistory RSS 피드를 가져와 파싱하는 함수 구현
- [x] **블로그 카드 UI 구현**: `components/BlogCard.tsx` 컴포넌트 생성 (썸네일, 제목, 요약, 링크 포함)
- [x] **서버 컴포넌트에서 데이터 Fetch**: `app/blog/page.tsx`를 서버 컴포넌트로 유지하고, 빌드 시점에 `getBlogPosts` 함수를 호출하여 최신 글 3개 표시
- [ ] **테스트**:
    - [ ] `tests/blog.spec.ts` 파일 생성
    - [ ] 테스트 내용: Blog 페이지 접속 시 최신 포스트 3개가 렌더링되는지 확인. 각 포스트에 제목과 링크가 포함되어 있는지 확인.
    - [ ] `npx playwright test tests/blog.spec.ts` 실행
- [ ] **정리**:
    - [ ] `rm tests/blog.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement blog section with Tistory RSS feed"`

---

## 📬 7. Contact 섹션 및 About 섹션 구현

- [x] **Contact 섹션 UI 구현**:
    - [x] 이메일, GitHub, 블로그 등 소셜 링크 아이콘 추가
    - [x] 간단한 문의 폼 UI 구현 (이름, 이메일, 내용, 제출 버튼)
- [x] **About 섹션 UI 구현**:
    - [x] PRD 기반 소개 문구, 기술 스택 아이콘, 이력 타임라인 UI 구현
    - [x] 이력서 다운로드 버튼 추가
- [ ] **테스트**:
    - [ ] `tests/contact_about.spec.ts` 파일 생성
    - [ ] 테스트 내용: Contact 페이지와 About 페이지의 주요 요소들이 정상적으로 표시되는지 확인.
    - [ ] `npx playwright test tests/contact_about.spec.ts` 실행
- [ ] **정리**:
    - [ ] `rm tests/contact_about.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement contact and about sections"`

---

## 🌍 8. 다국어 지원 (i18n)

- [x] **라이브러리 설치**: `next-intl` 설치 (`npm install next-intl`)
- [x] **설정 파일 및 라우팅 설정**: `i18n.ts`, `middleware.ts` 설정
- [x] **언어별 JSON 파일 생성**: `/messages/en.json`, `/messages/ko.json` 파일 생성 및 PRD 기반 콘텐츠 번역
- [x] **컴포넌트에 다국어 적용**: `useTranslations` 훅을 사용하여 각 컴포넌트의 텍스트를 동적으로 변경
- [x] **언어 전환 토글 UI**: Header에 KR/EN 전환 토글 버튼 구현
- [ ] **테스트**:
    - [ ] `tests/i18n.spec.ts` 파일 생성
    - [ ] 테스트 내용: 언어 전환 토글 클릭 시 페이지의 텍스트가 영어/한국어로 변경되는지 확인.
    - [ ] `npx playwright test tests/i18n.spec.ts` 실행
- [ ] **정리**:
    - [ ] `rm tests/i18n.spec.ts` 실행
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "feat: Implement multi-language support (i18n)"`

---

## ✅ 9. 최종 배포 및 최적화

- [x] **SEO 최적화**: `next-sitemap`을 사용하여 사이트맵 생성 및 `robots.txt` 파일 추가
- [x] **이미지 최적화**: `next/image`를 사용하여 이미지 로딩 최적화
- [ ] **Vercel 또는 Cloudflare Pages 배포**:
    - [ ] Git Repository 연결 및 자동 배포 설정
- [ ] **최종 테스트**: 배포된 환경에서 모든 기능이 정상 동작하는지 Playwright로 최종 확인
- [x] **커밋**:
    - [x] `git add .`
    - [x] `git commit -m "build: Prepare for deployment with SEO and optimization"`
