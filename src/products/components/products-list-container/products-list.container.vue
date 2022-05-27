<template>
  <div class="d-flex flex-column h-100 overflow-hidden">
    <!-- Product Category -->
    <ProductsCategoryPresentation v-if="isGetAllCategory" :categories="productCategories" @currentCategory="onClickCategory($event)" />
    <!-- End: Product Category -->

    <!-- Product List -->
    <ProductsListPresentation v-if="isShow" :products="productList" @onTitleClick="onTitleClick($event)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import ProductsListPresentation from "@/products/components/products-list-container/products-list-presentation/products-list.presentation.vue";
import { ProductServices } from "@/products/services/products.service";
import { Products } from "@/products/model/products.model";
import ProductsCategoryPresentation from "@/products/components/products-list-container/product-category-presentation/product-category.presentation.vue";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_LIST_CONTAINER,
  components: {
    ProductsListPresentation,
    ProductsCategoryPresentation,
  },
  data() {
    return {
      productList: new Array<Products>(),
      isShow: false,
      productCategories: new Array<any>(),
      isGetAllCategory: false,
    };
  },
  created() {
    this.loadProducts();
    this.loadAllCategories();
  },
  methods: {
    // Method called for Get Products List
    loadProducts() {
      ProductServices.getProducts().then((response) => {
        this.productList = response;
        this.isShow = true;
      });
    },

    // Method called while get all the categories
    loadAllCategories() {
      ProductServices.getAllCategories().then((response) => {
        this.productCategories = response;
        this.isGetAllCategory = true;
      });
    },

    // Called while get Cart Products
    getCartLimitedData() {
      ProductServices.getLimitedCardProduct(5).then((response) => {
        console.log(response);
      });
    },

    // Get Category data based on selection
    onClickCategory(categoryName: string) {
      this.isShow = false;
      if(categoryName == "all") {
        this.loadProducts();
      } else {
        ProductServices.getProductsByCategory(categoryName).then((response) => {
          this.productList = response;
          this.isShow = true;
        })
      }
    },

    // MEthod called while click on Product Title
    onTitleClick(value: boolean) {
      this.isGetAllCategory = value;
    }
  },
});
</script>
