import { i18nBaseExample1 } from "./namespaces/example1"
import { i18nBaseExample2 } from "./namespaces/example2"

const i18nBase = {
  example1: i18nBaseExample1,
  example2: i18nBaseExample2,
}

export type I18nBase = typeof i18nBase

export default i18nBase
