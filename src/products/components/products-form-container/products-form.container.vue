<template>
  <ProductsFormPresentation
    :productData="productDetails"
    @emitProductData="onSubmit($event)"
    @cancelClick="onCancel()"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import ProductsFormPresentation from "@/products/components/products-form-container/products-form-presentation/products-form.presentation.vue";
import { AddProducts } from "@/products/model/products.model";
import { ProductServices } from "@/products/services/products.service";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_FORM_CONTAINER,
  components: {
    ProductsFormPresentation,
  },
  data() {
    return {
      productDetails: new AddProducts(),
    };
  },
  methods: {
    // MEthod called while return to listing page
    productListing() {
      this.$router.push({ name: ProductConstants.ROUTE.DEFAULT });
    },

    // MEthod called while click on Submit 
    onSubmit(productData: any) {
      ProductServices.addProduct(productData).then(() => {
        this.productListing();
      });
    },

    // Method called while click on Cancel button
    onCancel() {
      this.productListing();
    }
  },
});
</script>
