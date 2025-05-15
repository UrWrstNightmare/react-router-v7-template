
import {
  isRouteErrorResponse, // isRouteErrorResponse → 에러가 라우터 오류인지 판별   
  Links,
  Meta, // Links, Meta → <head> 안에 <link>, <meta> 태그를 자동 삽입 
  Outlet,  // Outlet → 자식 라우트를 렌더링
  Scripts,  // Scripts → 필요한 <script> 삽입
  ScrollRestoration, // ScrollRestoration → 페이지 전환 시 스크롤 위치 복원
} from "react-router"
// react-router에서 제공하는 Data Router 전용 컴포넌트 및 함수
 // 기본 설정 같은 느낌

import Providers from "./Providers" //전역에서 쓰일 Providers 가져옴.

import type { Route } from "./+types/root" //현재 이 root파일의 Route타입을 가져와라.
import "./globals.css"

export const links: Route.LinksFunction = () => [ //<link> 태그 정의 : Links를 통해서 자동 삽입
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
] //폰트 사전 연결, 스타일시트 불러오기

export function Layout({ children }: { children: React.ReactNode }) { //레이아웃 기본 설정
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta /> {/* 여기서 meta 함수의 결과가 사용됨 : 현재 활성화된 라우트의 meta 함수에서 반환된 데이터를 사용*/}
        <Links />
      </head>
      <body>
        <Providers>{children}</Providers> {/** 컨텍스트 등 공통 Provider 등 */}
        <ScrollRestoration />
        <Scripts /> {/** 페이지 기능 지원 */}
      </body>
    </html>
  )
}

export default function App() { // 앱 진입 - 서브 라우트들이 여기 들어감
  return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) { //에러 처리
  let message = "Oops!"
  let details = "An unexpected error occurred."
  let stack: string | undefined

  if (isRouteErrorResponse(error)) { //라우트 오류일 때
    message = error.status === 404 ? "404" : "Error"
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details
  } else if (process.env.NODE_ENV === "development" && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main>
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
