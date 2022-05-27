<template>
  <ul class="category__list">
    <li class="category__item">
      <a href="#" class="category__link" :class="{active: currentTab == 'all'}" @click="onClickTab('all')">All</a>
    </li>
    <li class="category__item" v-for="(category, index) in allCategories" :key="index">
      <a href="#" class="category__link" :class="{active: currentTab == category && index + 1}" @click="onClickTab(category)">{{ category }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ProductConstants } from "@/products/constants";

export default defineComponent({
  name: ProductConstants.NAME.PRODUCTS_CATEGORY_PRESENTATION,
  props: ["categories"],
  emits: ["currentCategory"],
  data() {
    return {
      allCategories: new Array<any>(),
      currentTab: "all"
    }
  },
  created() {
    this.allCategories = this.categories;
  },
  methods: {
    onClickTab(categoryName: string) {
      this.currentTab = categoryName;
      this.$emit("currentCategory", categoryName);
    }
  }
});
</script>
