<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_CONTAINER,
});
</script>
