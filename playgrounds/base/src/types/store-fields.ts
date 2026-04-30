import type { Attribute } from 'pinia-orm'

export type StoreFields<T> = {
  [K in keyof T]: Attribute
}
