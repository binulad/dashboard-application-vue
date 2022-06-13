<template>
  <div class="dropdown">
    <button
      type="button"
      class="btn btn-primary"
      title="Cart"
      @click="openDropdown()"
    >
      <span class="icon icon-shopping_cart"></span>
    </button>
    <!-- Product Cart -->
    <ul
      class="dropdown-menu dropdown-menu-end cart__dropdown"
      :class="{ show: isOpenDropdown }"
      aria-labelledby="dropdownMenuButton1"
    >
      <li
        class="px-3"
        v-for="cartProduct in productDetails"
        :key="cartProduct.id"
      >
        <div class="d-flex overflow-hidden py-3 border-bottom">
          <div class="flex-shrink-0 cart__product-image">
            <img :src="cartProduct.image" class="mx-100" alt="Product Image" />
          </div>
          <div class="flex-grow-1 overflow-hidden ms-3">
            <h4 class="cart__product-title">{{ cartProduct.title }}</h4>
            <span class="cart__product-desc">{{
              cartProduct.description
            }}</span>
            <div class="d-flex align-items-center mb-1 w-50">
              <label
                for="formControlInput"
                class="form-label flex-shrink-0 mb-0 me-2"
                >Quantity:</label
              >
              <div class="input-group input-group-sm">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon1"
                  @click="onClickMinus(cartProduct.id)"
                >
                  <span class="icon icon-minus"></span>
                </button>
                <input
                  type="text"
                  id="formControlInput"
                  class="form-control"
                  placeholder=""
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                  :value="cartProduct.quantity"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  @click="onClickPlus(cartProduct.id)"
                >
                  <span class="icon icon-add"></span>
                </button>
              </div>
            </div>
            <div class="cart__product-price">${{ cartProduct.price }}</div>
          </div>
          <div class="flex-shrink-0">
            <button
              type="button"
              title="Remove"
              class="btn btn-link"
              @click="onClickClose(cartProduct.id)"
            >
              <span class="icon icon-close"></span>
            </button>
          </div>
        </div>
      </li>
      <li class="text-center py-2">
        <a href="#" class="small text-decoration text-link">Show All</a>
      </li>
    </ul>
    <!-- Product Cart -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CartConstants } from "@/cart/constant";

export default defineComponent({
  name: CartConstants.NAME.CART_PRESENTATION,
  props: ["productDetail"],
  emits: ["onClick", "onClose"],
  data() {
    return {
      isOpenDropdown: false,
      productDetails: new Array<any>(),
    };
  },
  created() {
    this.productDetails = this.productDetail;
  },
  methods: {
    // MEthod called while click on Cart button
    openDropdown() {
      this.isOpenDropdown = !this.isOpenDropdown;
    },

    // Method called while click on Minus Button
    onClickMinus(productId: number) {
      this.$emit("onClick", productId);
    },
    // Method called while click on Plus Button
    onClickPlus(productId: number) {
      this.$emit("onClick", productId);
    },

    // Method called while click on Cancel Button
    onClickClose(productId: number) {
      this.$emit("onClose", productId);
    },
  },
});
</script>
