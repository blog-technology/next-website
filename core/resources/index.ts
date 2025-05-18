import { en as commonEN } from "./en"
import { vi as commonVI } from "./vi"

export interface Resources {
  [key: string]: StringMap
}
export interface StringMap {
  [key: string]: string
}

const en: StringMap = {
  ...commonEN,
}
const vi: StringMap = {
  ...commonVI,
}

export const resources: Resources = {
  en: en,
  vi: vi,
}
