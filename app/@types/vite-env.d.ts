// not important, as this will be handled by env.ts
interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
// Vite의 환경 변수 타입을 정의
// import.meta.env의 타입을 확장할 수 있게 함
// 실제 환경 변수 타입은 env.ts에서 관리됨