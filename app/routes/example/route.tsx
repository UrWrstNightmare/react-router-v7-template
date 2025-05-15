import type { Route } from "./+types/route"
import ExampleHeader from "@/common/components/ExampleHeader"
import HeroBannerSection from "@/features/example/sections/HeroBannerSection"
import MenuSection from "@/features/example/sections/MenuSection"
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
      <HeroBannerSection />
      <MenuSection />
    </>
  )
}
