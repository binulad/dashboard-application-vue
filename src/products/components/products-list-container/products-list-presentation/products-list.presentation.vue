<template>
  <template v-if="!showProductDetail">
    <!-- Table Action Content -->
    <TableActionContent>
      <!-- Product Cart -->
      <div class="dropdown">
        <button
          type="button"
          class="btn btn-primary"
          title="Cart"
          @click="openDropdown()"
        >
          <span class="icon icon-shopping_cart"></span>
        </button>
        <ul class="dropdown-menu dropdown-menu-end" :class="{'show' : isOpenDropdown}" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <!-- End: Product Cart -->
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
              <a
                class="product__title h5 me-3"
                @click="onClickTitle(product.id)"
                >{{ product.title }}</a
              >
              <span class="product__price ms-auto">${{ product.price }}</span>
            </div>
            <div class="d-flex align-items-center">
              <vue-3-star-ratings
                class="m-0 p-0"
                v-model="product.rating.rate"
                :starSize="'16'"
                :showControl="false"
                :disableClick="true"
              />
              <p class="product__rating visually-hidden">
                {{ product.rating.rate }}
              </p>
              <button
                type="button"
                class="btn btn-sm btn-primary ms-auto"
                title="Add to Cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- End: Product listing -->
  </template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import { Products } from "@/products/model/products.model";
import TableActionContent from "@/components/TableActionContent.vue";
import Vue3StarRatings from "vue3-star-ratings";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_LIST_PRESENTATION,
  components: {
    TableActionContent,
    Vue3StarRatings,
  },
  props: ["products"],
  emits: ['onTitleClick'],
  data() {
    return {
      productList: new Array<Products>(),
      showProductDetail: false,
      isOpenDropdown: false
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id(newValue) {
      if (newValue) {
        this.showProductDetail = true;
      } else {
        this.showProductDetail = false;
      }
    },
  },
  created() {
    if (this.id) {
      this.openProductDetail(this.id);
      this.showProductDetail = true;
    }
    this.productList = this.products;
  },
  methods: {
    // Method called while click on Product Title
    onClickTitle(productId: any) {
      this.showProductDetail = true;
      this.openProductDetail(productId);
      this.$emit("onTitleClick", false);
    },

    // Method called to open Product Details Page
    openProductDetail(productId: any) {
      this.$router.push({
        name: ProductConstants.ROUTE.DETAILS,
        params: { id: productId },
      });
    },

    // Method called while click on Add Product button
    addProduct() {
      this.$router.push({ name: ProductConstants.ROUTE.ADD });
    },

    // MEthod called while click on Cart button
    openDropdown() {
      this.isOpenDropdown = !this.isOpenDropdown;
    },
  },
});
</script>
