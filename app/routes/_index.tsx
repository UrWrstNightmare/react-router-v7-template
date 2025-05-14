import { ExampleComponent } from "@/features/example/components/ExampleComponent"
import type { Route } from "./+types/_index"
import ThemeToggle from "@/common/components/ThemeToggle"
import LanguageToggle from "@/common/components/LanguageToggle"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
    <>
      <ExampleComponent /> {/** 예시번역 */}
      <LanguageToggle /> {/**언어 토글 */}
      <ThemeToggle /> {/** 테마 토글(색상) */}
    </>
  )
}
