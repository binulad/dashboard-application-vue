<template>
  <!-- Product List -->
  <ProductsListPresentation v-if="isShow" :products="productList" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import ProductsListPresentation from "@/products/components/products-list-container/products-list-presentation/products-list.presentation.vue";
import { ProductServices } from "@/products/services/products.service";
import { Products } from "@/products/model/products.model";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_LIST_CONTAINER,
  components: {
    ProductsListPresentation,
  },
  data() {
    return {
      productList: new Array<Products>(),
      isShow: false,
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    // Method called for Get Products List
    loadProducts() {
      ProductServices.getProducts().then((response) => {
        this.productList = response;
        this.isShow = true;
      });
    },
  },
});
</script>
