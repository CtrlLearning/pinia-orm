import type { PiniaOrmPlugin } from '@ctrllearning/pinia-orm'
import { definePiniaOrmPlugin } from '@ctrllearning/pinia-orm'
import type { GlobalConfig } from './types/config'

export function createPiniaOrmAxios(
  axiosConfig?: GlobalConfig,
): PiniaOrmPlugin {
  return definePiniaOrmPlugin((context) => {
    context.config.axiosApi = axiosConfig
    return context
  })
}

export const piniaOrmPluginAxios = createPiniaOrmAxios()
