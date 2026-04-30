import type { Attribute } from '@ctrllearning/pinia-orm'

export type StoreFields<T> = {
  [K in keyof T]: Attribute
}
