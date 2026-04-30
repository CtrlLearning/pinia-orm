<script setup lang="ts">
import { useProductStore } from "@/store/product/product.store.ts";
import {onMounted, ref} from "vue";

const productStore = useProductStore();
const isLoading = ref(true);

onMounted(async () => {
  await productStore.fetchList();
  isLoading.value = false;
})
</script>

<template>
  <h1>Products</h1>

  <p v-if="isLoading">Loading...</p>

  <ul v-else>
    <li v-for="product in productStore.products" :key="product.id">{{ product.name }} - &euro;{{ product.formattedPrice }}</li>
  </ul>
</template>
