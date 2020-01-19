declare module "icu-helpers" {
  type MessageFn = (...args: any) => string
  interface WritableStore {
    subscribe: (v: any) => () => {}
    set(v: any): void
    update(cb: () => {}): void
    clear(): void
  }
  export const currentLocale: WritableStore
  export const locales: WritableStore
  export const dictionary: WritableStore
  declare function addMessages(locale: any, messages: any): void
  declare function setLocale(locale: string): void
  declare function lookupMessage(key: string, locale?: string): string | MessageFn
  declare function init(Record): void
  declare function getDateFormatter(opts: any): Intl.NumberFormat
  declare function getNumberFormatter(opts: any): Intl.DateTimeFormat
  declare function getTimeFormatter(opts: any): Intl.DateTimeFormat
  declare function formatTime(value: Date): string
  declare function formatDate(value: Date): string
  declare function formatNumber(value: Number): string
}