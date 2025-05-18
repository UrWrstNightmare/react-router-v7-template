import React from "react"

import { SelectedThemeContext, type ThemeKeysWithAuto } from "@/Providers"
import { useTranslation } from "react-i18next"

const ThemeToggle = () => {
  const { selectedTheme, setSelectedTheme } = React.useContext(SelectedThemeContext)
  const { t } = useTranslation("common")

  return (
    <select
      value={selectedTheme}
      onChange={(e) => setSelectedTheme(e.target.value as ThemeKeysWithAuto)}
    >
      <option value="light">{t("toggleTheme.light")}</option>
      <option value="dark">{t("toggleTheme.dark")}</option>
    </select>
  )
}

export default ThemeToggle
