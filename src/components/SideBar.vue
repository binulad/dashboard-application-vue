<template>
  <input
    type="checkbox"
    id="toggle-sidebar"
    @click="toggleSidebar()"
    class="d-none"
  />
  <aside class="sidebar">
    <header class="d-flex align-items-center justify-content-between py-2 px-3 flex-shrink-0">
      <h2 class="logo-name m-0">
        {{ isMenuExpand ? "Admin." : "A." }}
      </h2>
      <label for="toggle-sidebar">
        <span class="icon icon-menu"></span>
      </label>
    </header>
    <nav class="flex-grow-1 h-100 overflow-auto">
      <ul class="list-unstyled menu-list m-0 py-2">
        <li
          class="menu-list__item"
          v-for="(menu, index) in menuList"
          :key="index"
        >
          <router-link
            :to="menu.to"
            active-class="active"
            :title="menu.name"
            class="menu-list__link"
          >
            <span class="menu-list__link-icon" :class="menu.class"></span>
            <span class="menu-list__link-name">{{ menu.name }}</span>
            </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Constants } from "@/constants";

export default defineComponent({
  name: "SideBar",
  data() {
    return {
      menuList: Constants.MENU_ITEM_LIST,
      isMenuExpand: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.isMenuExpand = !this.isMenuExpand;
    },
  },
});
</script>
