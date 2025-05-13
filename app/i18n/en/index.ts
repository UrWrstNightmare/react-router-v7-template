import i18nBase from "../_base"
import { i18nEnglishExample1 } from "./namespaces/example1"
import { i18nEnglishExample2 } from "./namespaces/example2"

const i18nEn = {
  ...i18nBase,
  example1: i18nEnglishExample1,
  example2: i18nEnglishExample2,
}

export default i18nEn
