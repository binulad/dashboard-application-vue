<template>
  <div ref="contentWrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableActionContent",
  data() {
    return {
      contentWrapperRef: HTMLElement as any,
      tableActionEl: HTMLElement as any
    };
  },
  mounted() {
    this.contentWrapperRef = this.$refs.contentWrapper;
    this.tableActionEl = document.getElementById("tableActionContentWrapper");
    this.tableActionEl?.appendChild(this.contentWrapperRef);
  },
  unmounted() {
    this.tableActionEl?.removeChild(this.contentWrapperRef);
  }
});
</script>
