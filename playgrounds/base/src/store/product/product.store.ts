import {defineStore} from "pinia";
import {useRepo} from "pinia-orm";
import {ProductModel} from "@/store/product/product.model.ts";
import type {ProductRo} from "@/store/product/product-ro.ts";
import {computed} from "vue";

export const useProductStore = defineStore("productStore", () => {
  async function fetchList() {
    const data: ProductRo[] = [{
      id: 1,
      name: "Test product",
      price: 23.1231
    }];

    useRepo(ProductModel).save(data);
  }


  function productById(id: number) {
    return useRepo(ProductModel).find(id);
  }

  const products = computed(() => {
    return useRepo(ProductModel).all();
  })

  return {
    fetchList,
    productById,
    products
  };
});
