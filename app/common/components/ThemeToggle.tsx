import React from "react"

import { SelectedThemeContext, type ThemeKeysWithAuto } from "@/Providers"

const ThemeToggle = () => {
  const { selectedTheme, setSelectedTheme } = React.useContext(SelectedThemeContext)

  return (
    <select
      value={selectedTheme}
      onChange={(e) => setSelectedTheme(e.target.value as ThemeKeysWithAuto)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default ThemeToggle
