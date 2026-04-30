<script setup>
import { VaCard, VaCardContent, VaCardTitle } from 'vuestic-ui'

import { onMounted, computed } from 'vue'

import { useAxiosRepo } from '@pinia-orm/axios'
import UserModel from './models/User'
import { useRepo } from 'pinia-orm'

onMounted(() => {
  useRepo(UserModel).save({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
  })

  // console.log(useAxiosRepo(UserModel).api().fetchById(1))
})

const users = computed(() => {
  return useRepo(UserModel).all()
})
</script>

<template>
  <VaCard>
    <VaCardTitle>Users</VaCardTitle>
    <VaCardContent>{{ users }}</VaCardContent>
  </VaCard>
</template>
