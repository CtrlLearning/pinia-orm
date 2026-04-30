import { Model } from 'pinia-orm'
import type { ProductRo } from './product-ro.ts'
import type { StoreFields } from '@/types/store-fields.ts'

export class ProductModel extends Model implements ProductRo {
  public static entity = 'Product'

  public static fields = (): StoreFields<ProductRo> => ({
    id: this.attr(null),
    name: this.attr(null),
    price: this.attr(null),
  })

  declare public id: number
  declare public name: string
  declare public price: number

  public get formattedPrice() {
    return this.price.toFixed(2)
  }
}
