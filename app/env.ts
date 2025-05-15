import z from "zod" // Zod는 런타임 타입 검증을 위한 TypeScript 라이브러리

const publicEnvSchema = z.object({
  VITE_APP_LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
  VITE_APP_API_URL: z.string().url(),
  VITE_APP_API_MOCK_MODE: z.coerce.boolean(),
}) // 환경 변수의 구조와 타입 정의

export const clientEnv = publicEnvSchema.parse(import.meta.env)
// import.meta.env를 사용하여 Vite의 환경 변수를 가져옴
// publicEnvSchema.parse()를 호출하여 환경 변수를 검증하고 파싱
// 검증된 환경 변수를 clientEnv로 내보냄