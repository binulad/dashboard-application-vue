<template>
  <ProductsDescriptionPresentation v-if="isShow" :productDetail="productDetail" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import ProductsDescriptionPresentation from "@/products/components/products-description-container/products-description-presentation/products-description.presentation.vue";
import { ProductServices } from "@/products/services/products.service";
import { EditProducts } from "@/products/model/products.model";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_DESCRIPTION_CONTAINER,
  components: {
    ProductsDescriptionPresentation
  },
  data() {
    return {
      productDetail: new Array<EditProducts>(),
      isShow: false
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    this.getProductData();
  },
  methods: {
    // Method called for get Product Data from ID
    getProductData() {
      ProductServices.getProductById(this.id).then((response) => {
        this.productDetail = response;
        this.isShow = true;
      })
    }
  }
});
</script>