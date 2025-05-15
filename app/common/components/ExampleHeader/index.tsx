import React from "react"
import { ExampleDesktopHeader } from "./_variants/_ExampleDesktopHeader"
import { ExampleMobileHeader } from "./_variants/_ExampleMobileHeader"
import useIsMobile from "@/common/hooks/useIsMobile"

const ExampleHeader: React.FC = () => {
  const isMobile = useIsMobile()

  return isMobile ? <ExampleMobileHeader /> : <ExampleDesktopHeader />
}

export default ExampleHeader
