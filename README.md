# 전자공학 취업 포트폴리오

React + Vite 기반의 반응형 단일 페이지 포트폴리오입니다.

## 실행

Node.js 20.19 이상을 설치한 뒤 이 폴더에서 실행하세요.

```bash
npm install
npm run dev
```

배포용 파일은 `npm run build`로 생성되며 `dist/`에 저장됩니다.

## 내용 수정

- `src/content.js`: 이름, 소개, 프로젝트 설명, 기술, 경험, 연락처와 링크
- `src/styles.css`: 색상, 간격, 글꼴, 반응형 스타일
- `src/App.jsx`: 섹션 및 컴포넌트 구성
- `public/`: 이력서 PDF 등 다운로드 파일
- `public/images/donga-university-logo.png`: About Me 섹션의 동아대학교 로고 ([동아대학교 공식 홈페이지](https://www.donga.ac.kr/kor/CMS/Contents/Contents.do?mCode=MN020) 이미지)

확인되지 않은 이름, 연락처, 성과 수치, 세부 역할은 넣지 않았습니다. `src/content.js`의 빈 링크와 안내 문구를 본인의 실제 정보로 바꾸세요. 프로젝트 링크는 입력했을 때만 버튼이 표시됩니다.
