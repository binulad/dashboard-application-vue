<template>
  <header class="page-header">
    <div
      class="d-flex align-items-center justify-content-between pb-2 border-bottom"
    >
      <!-- Page Title -->
      <h3 class="page-header__title">{{ pageMeta.pageTitle }}</h3>
      <!-- End: Page Title -->

      <!-- Page Action -->
      <div class="page-header__action">
        <!-- User Profile -->
        <div class="dropdown">
          <button
            type="button"
            title="User Name"
            class="user-profile btn btn-link"
            @click="openDropdown()"
          >
            <img
              src="@/assets/img/user.jpg"
              alt="User Image"
              class="user-profile__img"
            />
            <div class="d-flex align-items-center">
              <span class="user-name me-1">User Name</span>
              <span
                class="icon icon-expand_more"
                :class="{ rotate180: isShowDropdown }"
              ></span>
            </div>
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end p-0 mt-1 border-0 shadow"
            :class="{ show: isShowDropdown }"
          >
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
        <!-- End: User Profile -->
      </div>
      <!-- End: Page Action -->
    </div>

    <!-- Page Toolbar -->
    <div class="page-header__toolbar mt-2">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="my-2">
        <ol class="breadcrumb mb-0">
          <template v-if="breadcrumbList">
            <li
              class="breadcrumb-item"
              aria-current="page"
              v-for="(crumb, index) in breadcrumbList"
              :key="index"
              :class="{ active: isActive(index) }"
            >
              <template v-if="isActive(index)">
                {{ crumb.name }}
              </template>
              <template v-else>
                <router-link :to="crumb.path">{{ crumb.name }}</router-link>
              </template>
            </li>
          </template>
        </ol>
      </nav>
      <!-- End: Breadcrumb -->

      <!-- Module Wise Action -->
      <div
        v-once
        id="tableActionContentWrapper"
        class="page-header__toolbar-action"
      ></div>
      <!-- End: Module Wise Action -->
    </div>
    <!-- End: Page Toolbar -->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  data() {
    return {
      isShowDropdown: false,
      // parentCrumbArr: new Array<any>()
    };
  },
  computed: {
    pageMeta(): any {
      return this.$route.meta;
    },
    breadcrumbList(): any[] {
      return this.$route.matched;
    },
  },
  methods: {
    isActive(index: any): boolean {
      return index === this.breadcrumbList.length - 1;
    },
    openDropdown() {
      this.isShowDropdown = !this.isShowDropdown;
    },
    onClickHome() {
      this.$router.push({ name: "Home" });
    },
  },
});
</script>
