# Web Dev Part 2 — React 입문 (2026-06-30)

작업 폴더: `003_React/bootstrap/` (구 react-playground, Vite 프로젝트 루트)

## 학습 목표
React의 작동 원리 익히기 (실제 신문 X, 연습 O)
환경 설정 → JSX 작성 → 컴포넌트 간 데이터 전달(Props)

## 핵심 개념
- React = 재사용 가능한 **컴포넌트**를 만드는 JavaScript 라이브러리
- Vite = React를 브라우저용 JS로 컴파일해주는 빌드 도구
- JSX 규칙: ①단일 부모 요소 반환 ②`class` 대신 `className` ③컴포넌트명 대문자 시작
- Props = HTML 속성처럼 컴포넌트에 데이터 전달

## 진행 로그
- [x] Step 1: Vite로 react-playground 생성 + npm run dev (localhost:5173 확인)
- [x] Step 2: 전역 스타일시트 (App.css 삭제, index.css 교체, App.jsx 최소화) → "Welcome to the React Sandbox" 확인
- [x] Step 3: 첫 컴포넌트 AlertButton.jsx + JSX (components/ 폴더, import/export)
- [x] Step 4: Props로 버튼별 다른 텍스트 (Save Article / Delete / Publish Now)
- [x] Step 5: 최종 정리 ✅ 부트스트랩 완료

## 결과물
- `003_React/bootstrap/src/` — App.jsx + components/AlertButton.jsx (props)
- 버튼 3개 정상 렌더 확인 (localhost:5173)

## 메모
- 처음에 홈(~/react-playground)에 생성됨 → 003_React/bootstrap 으로 이동함
