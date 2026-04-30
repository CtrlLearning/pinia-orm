import type { Constructor, Model } from '@ctrllearning/pinia-orm'
import { useRepo } from '@ctrllearning/pinia-orm'
import { getActivePinia } from 'pinia'
import { AxiosRepository } from '../repository/AxiosRepository'

export function useAxiosRepo<M extends Model>(model: Constructor<M>) {
  const pinia = getActivePinia()
  AxiosRepository.useModel = model as unknown as typeof Model
  return useRepo(AxiosRepository<Model>, pinia)
}
