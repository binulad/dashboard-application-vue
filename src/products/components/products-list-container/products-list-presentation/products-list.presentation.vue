<template>
  <!-- Table Action Content -->
  <TableActionContent>
    <button type="button" class="btn btn-primary">Add Product</button>
  </TableActionContent>
  <!-- End: Table Action Content -->

  <!-- Product listing -->
  <div class="d-flex flex-column h-100 overflow-auto">
    <ul class="product__container m-0 p-0">
      <li
        class="card product__card"
        v-for="product in productList"
        :key="product.id"
      >
        <div class="product__image">
          <img :src="product.image" alt="Product Image" />
        </div>
        <div class="product__details">
          <div class="d-flex flex-grow-1">
            <h5 class="product__title me-3">{{ product.title }}</h5>
            <span class="product__price ms-auto">${{ product.price }}</span>
          </div>
          <div class="d-flex align-items-center">
            <p class="product__rating">{{ product.rating.rate }}</p>
            <button type="button" class="btn btn-sm btn-primary ms-auto" title="Add to Cart">
              Add to Cart
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- End: Product listing -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import { Products } from "@/products/model/products.model";
import TableActionContent from "@/components/TableActionContent.vue";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_LIST_PRESENTATION,
  components: {
    TableActionContent,
  },
  props: ["products"],
  data() {
    return {
      productList: new Array<Products>(),
    };
  },
  created() {
    this.productList = this.products;
  },
});
</script>
