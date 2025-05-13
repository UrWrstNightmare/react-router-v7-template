import type { I18nBase as _I18nBase } from "@/i18n/_base"

import i18nKo from "./ko"
import i18nEn from "./en"

export const namespaces = ["example1", "example2"]

export const resources = {
  ko: i18nKo,
  en: i18nEn,
}

export type I18nBase = _I18nBase
