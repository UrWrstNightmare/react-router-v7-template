import { ExampleComponent } from "@/features/example/components/ExampleComponent"
import type { Route } from "./+types/_index"
import ThemeToggle from "@/common/components/ThemeToggle"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Home() {
  return (
    <>
      <ExampleComponent />
      <ThemeToggle />
    </>
  )
}
