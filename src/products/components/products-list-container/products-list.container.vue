<template>
  <!-- Table Action Content -->
  <TableActionContent>
    <!-- Product Cart -->
    <!-- <CartContainer /> -->
    <!-- Product Cart -->
  </TableActionContent>
  <!-- End: Table Action Content -->

  <!-- Product List -->
  <ProductsListPresentation
    v-if="isShow"
    :products="productList"
    :categories="productCategories"
    @onTitleClick="onTitleClick($event)"
    @clickCategory="onClickCategory($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";
import ProductsListPresentation from "@/products/components/products-list-container/products-list-presentation/products-list.presentation.vue";
import { ProductServices } from "@/products/services/products.service";
import { Products } from "@/products/model/products.model";
import TableActionContent from "@/components/TableActionContent.vue";
import CartContainer from "@/cart/component/cart-container/cart.container.vue";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_LIST_CONTAINER,
  components: {
    ProductsListPresentation,
    TableActionContent,
    // CartContainer,
  },
  data() {
    return {
      productList: new Array<Products>(),
      isShow: false,
      productCategories: new Array<any>(),
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    this.loadAllCategories();
    this.loadProducts();
  },
  methods: {
    // Method called for Get Products List
    async loadProducts() {
      await ProductServices.getProducts().then((response) => {
        this.productList = response;
        this.isShow = true;
      });
    },

    // Method called while get all the categories
    async loadAllCategories() {
      await ProductServices.getAllCategories().then((response) => {
        this.productCategories = response;
      });
    },

    // Get Products By Category
    async productsByCategory(categoryName: string) {
      await ProductServices.getProductsByCategory(categoryName).then(
        (response) => {
          this.productList = response;
          this.isShow = true;
        }
      );
    },

    // Get Category data based on selection
    onClickCategory(categoryName: any) {
      if (categoryName == "all") {
        this.loadProducts();
      } else {
        this.productsByCategory(categoryName);
      }
    },

    // MEthod called while click on Product Title
    onTitleClick(value: boolean) {
      console.log(value);
    },
  },
});
</script>
