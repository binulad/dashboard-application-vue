<template>
  <div class="card border-0 h-100 shadow">
    <div class="product-detail__container p-3">
      <!-- Product Image -->
      <div class="product-img">
        <img :src="productDetail.image" alt="Product Image" />
      </div>

      <!-- Product Content -->
      <div class="product-content">
        <h4 class="product-title">{{productDetail.title}}</h4>
        <p class="product-desc">{{productDetail.description}}</p>
        <div class="product-rating">
          <span class="product-rate">{{productDetail.rating.rate}}</span>
          <span class="icon icon-star ms-1"></span>
          <span class="vr mx-2"></span>
          <span class="product-count">{{productDetail.rating.count}} Ratings</span>
        </div>
        <hr />
        <div class="product-price my-4">${{productDetail.price}}</div>
        <div class="product-cta">
          <button type="button" title="Add to Cart" class="btn btn-lg btn-primary px-5">
            <span class="icon icon-shopping_cart me-2"></span>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_DESCRIPTION_PRESENTATION,
  props: ["productDetail"],
});
</script>
