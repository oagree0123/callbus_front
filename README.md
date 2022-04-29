# 콜버스랩 프론트엔드 과제

## 프로젝트 실행

```
npm i
npm i json-server
npm run serve
npm start
```

`npm i` : 프로젝트 설치  
`npm i json-server` : json-server 설치  
`npm run serve` : mock server 실행(json-server / port:3001)
`npm start` : 프로젝트 실행

## 폴더 구조

```bash
├─ public
│   ├─ assets
│       └─ img
└─ src
   ├─ components
   ├─ db
   ├─ pages
   ├─ redux
   └─ shared
```

`components` : 컴포넌트 폴더  
`db` : mock server 데이터  
`pages` : 최상위 page 폴더 
`redux` : redux 전역 상태관리 폴더  
`shared` : 글로벌 컴포넌트, 스타일 폴더

## 기술 스택

- build : create-react-app
- language : typescript
- SPA framework : react
- CSS in JS : styled-components
- global state management : react-redux, redux-thunk(미들웨어)
