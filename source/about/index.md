---
title: 소개
date: 2025-01-12 18:10:07
updated: 2026-09-13 19:00:00
---

> 소프트웨어 엔지니어 이준수입니다. 라이너에서 AI 검색·리서치 서비스의 모바일 앱을 개발하고 있습니다.
>
> 모바일 앱과 클라우드 인프라를 개발·운영하며, 공공데이터와 디지털 정책 분야의 민관협력에도 참여해 왔습니다. 기술을 만드는 사람과 사용하는 사람을 연결하며 사회에 기여하고자 합니다.

---

## Contacts
- Name: 이준수
- Email: me@adrinerdp.co
- LinkedIn: [adrinerdp](https://www.linkedin.com/in/adrinerdp/)

---

## Skills
### Client
- **Web**: <span style="text-decoration:underline dotted">React</span> / Vue.js (2.x, 3.x)
- **Hybrid App**: <span style="text-decoration:underline dotted">React Native</span> (+ Expo)
- **Native App**: <span style="text-decoration:underline dotted">iOS</span> (SwiftUI)
### Server
- **Node.js**: <span style="text-decoration:underline dotted">NestJS</span> (Express, Fastify)
- **Python**: FastAPI / Flask
- **Others**: Spring Boot / Laravel
### Infrastructure
- **Cloud**: <span style="text-decoration:underline dotted">AWS</span> / Azure
- **Orchestration**: <span style="text-decoration:underline dotted">Kubernetes</span>
- **CI/CD**: <span style="text-decoration:underline dotted">GitHub Actions</span>

---

## Careers

### Liner

**Software Engineer (Mobile) | 2025.04 ~ 현재**

React Native 기반 모바일 앱을 중심으로 웹 제품, AI 서비스 연동, 구독 및 결제 기능을 개발합니다. 공통 인증 플랫폼과 배포 자동화는 설계부터 구현, 조직 내 도입까지 주도했습니다.

#### Mobile Application

- **React Native 및 Expo 기반 AI 검색 앱 개발**
  - 기존 앱의 Expo 마이그레이션 및 전면 재작성
  - 검색, 답변, 온보딩, 구독 등 주요 사용자 흐름 이관
- **모바일 사용 경험 개선**
  - 답변의 출처와 생성 과정 표시, 답변 비교 및 후속 작업 기능 개발
  - 딥링크, Push Notification 라우팅 및 WebView 브리지 구현
  - 공통 UI 컴포넌트, 다크모드, 다국어 및 태블릿 대응

#### Web Product

- **AI 시각화 기능 개발**
  - React 기반 시각화 결과 UI 및 사용자 피드백 기능 구현
  - iframe의 스트리밍 전환, 테마 변경 및 렌더링 문제 개선
  - Statsig 기반 기능 노출 실험 및 이벤트 계측
- **콘텐츠 및 온보딩 기능 개발**
  - Notion CMS와 Next.js를 연동한 정책 문서 페이지 및 버전 조회 기능 구현
  - 사용자 행동과 퍼널 상태를 관리하는 온보딩 넛지 코디네이터 기반 구현

#### Subscription & Monetization

- **인앱 구독 및 페이월 구현 전반 담당**
  - iOS 및 Android 스토어 상품과 구독 API 연동
  - 멤버십 상태에 따른 기능별 이용 권한 처리
  - 페이월 노출 위치와 순서 논의 참여 및 구현
- **프로모션 및 크레딧 과금**
  - 제휴 프로모션, 할인 상품, 크레딧 리워드 및 광고 연동
  - Kotlin 기반 AI 도구 실행 내역 집계와 응답 완료 시점의 크레딧 차감 로직 개선

#### AI Service Integration

- **실시간 음성 전사 API 개발**
  - Python 기반 세션 API 및 OpenAI Realtime API 연동
  - 클라이언트용 단기 인증 토큰 발급
  - Pydantic 기반 요청 및 응답 스키마 구현
- **AI 시각화 및 추적 정보 연동**
  - 사용자 로케일에 따른 시각화 생성 요청과 프롬프트 다국어 대응
  - Langfuse 기반 AI 서비스 간 요청 및 세션 추적 정보 연동

#### Analytics & Observability

- **사용자 행동 분석 및 실험**
  - Amplitude와 Airbridge 기반 행동 이벤트 및 구독 매출 정보 연동
  - 사용자 식별 정보 동기화와 분석 SDK 초기화 흐름 개선
  - 이벤트 유실 및 사용자 여정 연결 문제 수정
  - Statsig 기반 Feature Flag 및 실험 도구 연동
- **앱 오류 진단**
  - Sentry 기반 오류 추적 환경 구축 및 진단 정보 수집 개선
  - 앱 크래시와 릴리스 회귀 문제 대응

#### Identity Platform

- **공통 인증 플랫폼 구축 주도**
  - 문제 정의부터 설계, 구현, 조직 내 도입까지 담당
  - OAuth 2.0 기반 인증 포털과 클라이언트별 설정 체계 구축
  - 소셜 로그인과 프로필, 계정 및 구독 관리 기능 통합
- **인증 SDK 및 웹 연동**
  - Redirect, Popup, Inline 인증 방식을 지원하는 React SDK 개발
  - React Router의 Server Loader를 활용한 인증 리다이렉트 구현
  - 인증 상태에 따른 필수 정보 입력 및 동의 처리 흐름 구현

#### Mobile Delivery

- **앱 빌드 및 배포 자동화 주도**
  - Fastlane과 GitHub Actions 기반 iOS 및 Android 빌드와 배포 자동화
  - App Store 및 Google Play 심사 제출 워크플로 구축
  - 개발, 스테이징, 운영 환경 분리 및 배포 설정 관리
- **OTA 업데이트**
  - CodePush에서 Hot Updater로 업데이트 체계 전환
  - 앱 업데이트와 환경 설정 연계 개선

#### Developer Platform & Infrastructure

- **개발환경 및 배포 관리 플랫폼 구축 주도**
  - 조직과 프로젝트 단위의 환경 및 배포 관리 기능 개발
  - Next.js App Router와 Hono 기반 관리 화면 및 API 구현
  - GitHub Workflow Dispatch 기반 배포 실행과 상태 추적 연동
- **GitOps 및 CI/CD**
  - Kubernetes 환경의 Helm 차트 작성 및 ArgoCD 배포 설정
  - Actions Runner Controller 기반 CI 러너의 캐시 구성과 Pod 분산 설정 개선
  - Turborepo 변경 영향 분석을 활용한 CI 실행 대상 선별
  - Next.js 빌드 캐시 및 배포 워크플로 최적화

<br />

<div style="display:flex;flex-direction:column;gap:8px">
    <div style="display:flex;align-items:center;justify-content:space-between">
        <h3 style="margin:0">HUSTLERS Corp.</h3>
        <a href="https://www.hustlers.co.kr" target="_blank">hustlers.co.kr</a>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
        <p style="margin:0">기술이사 <small style="color:gray">(CTO · iOS & DevOps)</small></p>
        <p style="margin:0;color:dimgray">2023-05 ~ 2025-03</p>
    </div>
</div>

> SwiftUI · Tuist · Fastlane · Composable Architecture · Alamofire · Realm
> 
> AWS · EKS · Pulumi · Grafana · Prometheus

- **터닝 iOS 개발 및 운영**
  - Composable Architecture 기반 모듈화된 앱 아키텍처 구축
  - 로컬과 서버 데이터 동기화를 위한 Flowed-Action 개발
  - MDM: FamilyControls, ManagedSettings, ActivityMonitor 사용
- **AWS 기반 인프라 구축 및 관리**
  - Pulumi + ArgoCD 기반 GitOps 셋업
  - 단일 리전 (us-west-2) 기반 글로벌 서비스 운영 (~200ms RTT)
  - 특정 시간대 트래픽 대응을 위한 HPA & Scheduled Scaling 설정

<br />

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between">
        <h3 style="margin:0">당근</h3>
        <a href="https://about.daangn.com" target="_blank">daangn.com</a>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
        <p style="margin:0">Site Reliability Engineer <small style="color:gray">(Intern)</small></p>
        <p style="margin:0;color:dimgray">2023-01 ~ 2023-02</p>
    </div>
</div>

> NestJS · TypeORM · React · Slack Bot
>
> AWS · EKS · Terraform · Grafana · Loki · DataDog

- **전사 네트워크 Observability 확보 프로젝트**
  - AWS SDK를 이용한 VPC, Subnet, Security Group 등의 정보 시각화 (Web & Slack Bot) 
  - EKS VPC CNI - Pod IP 메타데이터 시계열 탐색 기능 제공 (Loki)
  - DataDog 연동으로 Office Network, Data Center, Cloud Network 통합 검색

<br />

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between">
        <h3 style="margin:0">SW마에스트로</h3>
        <a href="https://www.swmaestro.org" target="_blank">swmaestro.org</a>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
        <p style="margin:0">13기 <small style="color:gray">(연수생)</small></p>
        <p style="margin:0;color:dimgray">2022-06 ~ 2022-11</p>
    </div>
</div>

- **헬스 루틴 및 식단 관리 프로젝트**
  - NestJS 기반 서버 개발
  - 외부 Vision API 연동 개발
  - 헬스 리포트 웹뷰 개발 및 연동

---

## Experiences

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
    <div style="display:flex;align-items:center;justify-content:space-between">
        <h3 style="margin:0">시대생</h3>
        <a href="https://www.uoslife.team" target="_blank">uoslife.team</a>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
        <p style="margin:0">개발 · CTO</p>
        <p style="margin:0;color:dimgray">2021-04 ~ 2023-12</p>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between">
        <p style="margin:0">Advisor</p>
        <p style="margin:0;color:dimgray">2023-12 이후 ~ Current</p>
    </div>
</div>

2023년 12월까지 개발·CTO로 활동했으며, 이후 기술 자문을 이어가고 있습니다. 아래는 개발·운영 과정에서 수행한 주요 프로젝트입니다.

#### Cluster Operation
- **Kubernetes 기반 클러스터 구축 및 운영**
  - EKS + Fargate를 통한 비용 최적화 및 확장성 확보
- **On-Premise 환경에서 Multi-Cluster 환경 구축 및 운영**
  - Management, Alpha, Production Cluster로 구성된 3개 클러스터 운영
  - Istio + Prometheus + Grafana를 통한 모니터링 및 트래픽 제어

#### CI/CD Pipeline
- **GitHub Actions 기반 CI/CD Pipeline 구축**
  - 다양한 서버 환경에 따른 Dockerfile + Workflow 템플릿 구축 및 제공 (8종)
  - 웹뷰 배포 목적지에 따른 템플릿 구축 및 제공 (K8s + nginx / S3 + CF)

#### Security & Compliance
- **Networks**
  - Tailscale을 통한 On-Premise & Cloud VPN 구축
  - 접근 권한 통제를 위한 GitHub Team 기반 ACL 설정
- **Credentials**
  - AWS IAM Identity Center를 통한 콘솔 접근 권한 관리
  - IRSA 기반 AWS Access Key ID & Secret 100% 없는 환경 구축
  - On-Premise 환경에서 Pod Identity Webhook을 통한 OIDC 기반 IRSA 연동

#### Identity Provider
- **Keycloak 기반 IdP 운영**
  - 일반 사용자 및 내부 구성원 모두 KeyCloak을 통해 통합 ID 관리
  - OIDC 기반 일반 사용자 서비스 인증 환경 구축 및 연동
  - SAML 기반 AWS & Redash 등 관리용 도구 연동
- **Account Service 구축 및 운영**
  - NestJS를 이용하여 인증 / 인가 / Identity 관리 서비스 직접 구축
  - AWS KMS 기반 JWT Signing 및 Verification 구현

#### Mobile Applications
- Expo + React 웹뷰 구축 및 운영
- React Native 유지보수
- iOS / Android 웹뷰 앱 유지보수

#### Service Projects
- 학적 점유 인증 및 포털 Proxy 서비스 `account`
- 도서관 좌석 정보 조회 서비스 `library`
- 시간표 관리 서비스 `timetable`
- 통합 알림 전송 및 관리 서비스 `notifications`


---

## 공공정책·위원회 활동

### 행정안전부 제8기 정책자문위원회
- **기간:** 2026.01 ~ 현재
- **역할:** 참여혁신분과 민간위원

### 제4기 대한민국 열린정부위원회
- **기간:** 2024.02 ~ 2026.02
- **역할:** 민간위원 · 디지털분과위원장(2024.03 선출)

### 행정안전부 정부혁신 유공 포상
- **기간:** 2022.12
- **역할:** 국민참여심사 심사위원

### 제3기 대한민국 열린정부위원회
- **기간:** 2021.08 ~ 2023.08
- **역할:** 디지털분과 민간위원

### 행정안전부 정부혁신 컨설팅단
- **기간:** 2021
- **역할:** 디지털분과 민간위원

### 코드포코리아
- **기간:** 2020
- **역할:** 코로나19 공공데이터 공동대응 / 공적마스크 활동가
- 공적마스크 데이터 개방 요청 및 시민 개발자 대상 정보 공유·확산에 참여

---

## 발표·패널·진행

### Global AI Privacy Forum
- **내용:** ‘Growing up with AI’ 세션 패널
- **주관:** 개인정보보호위원회

### 2024 세계열린정부주간
- **내용:** ‘공공데이터와 청년의 삶’ 세션 모더레이터
- **주관:** 행정안전부

### 2023 세계열린정부주간
- **내용:** ‘디지털 플랫폼 정부와 국민과 함께하는 열린정부 구현’ 세션 패널
- **주관:** 행정안전부

### 2022 세계열린정부주간
- **내용:** ‘디지털 기반(플랫폼) 정부와 시민참여 토론회’ 세션 패널
- **주관:** 행정안전부

### 부산 데이터 위크 2022
- **내용:** 부산형 ‘데이터 산업’ 전략적 육성 방안 세션 패널
- **주관:** 부산광역시

### 2021 OGP Global Summit
- **내용:** ‘공익데이터의 현재와 미래’ 세션 패널 / ‘코로나19 회복과 도약’ 특별 세션 발제
- **주관:** 행정안전부

### 2021 열린소통포럼
- **내용:** 공적마스크 앱·개인안심번호 등 민관협력 사례 발표
- **주관:** 행정안전부
