import type { Route } from "./+types/route"
import ExampleHeader from "@/common/components/ExampleHeader"
import HeroBanner from "@/features/example/sections/HeroBanner"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Example" },
    { name: "description", content: "Welcome to React Router!" },
  ]
}

export default function Page() {
  return (
    <>
      <ExampleHeader />
      <HeroBanner />
    </>
  )
}
