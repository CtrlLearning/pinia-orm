import type {
  FilledInstallOptions as FOptions,
  InstallOptions as IOptions,
  ModelConfigOptions as MCOptions,
} from '@ctrllearning/pinia-orm'
import type { Config, InstallConfig } from './config'

declare module '@ctrllearning/pinia-orm' {
  export type InstallOptions = IOptions & InstallConfig
  export type FilledInstallOptions = FOptions & Required<InstallConfig>
  export type ModelConfigOptions = MCOptions & { axios: Config }
}
