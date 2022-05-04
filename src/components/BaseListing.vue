<template>
  <!-- Base Listing UI -->
  <table class="table position-relative mb-0" aria-describedby="Listing">
    <thead class="sticky-table-header">
      <tr>
        <th scope="col" v-for="item in defaultColumn" :key="item.field">
          <template v-if="item.sortable">
            <a
              href="#"
              class="header-data"
              :class="getSortOrder(item.field)"
              @click="sortColumn(item.field)"
            >
              {{ item.title }}
              <span class="sort"></span>
            </a>
          </template>
          <template v-else>
            <span>{{ item.title }}</span>
          </template>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="filterTicketsData.length">
        <tr v-for="(items, index) in filterTicketsData" :key="index">
          <td v-for="column in defaultColumn" :key="column.field">
            <template v-if="column.cell && columns.field == items.field">
              <slot :props="items[column.field]" :name="column.cell"></slot>
            </template>
            <template v-else>
              <slot>
                {{ items[column.field] }}
              </slot>
            </template>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td :colspan="totalColumns" class="text-muted text-center">
            No Record Found
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <!-- End: Base Listing UI -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Constants } from "@/constants";

export default defineComponent({
  name: "BaseListing",
  props: {
    columns: {
      type: Array,
      required: true,
    } as any,
    defaultSort: String,
    dataItemList: {
      type: Array,
      required: true,
    } as any,
  },
  data() {
    return {
      // Set default column for listing
      defaultColumn: [
        {
          field: "",
          title: "",
          sortable: false,
          cell: "",
        },
      ],
      // Default sort column
      sortBy: this.defaultSort,
      sortOrders: new Array<any>(),
      sortDirection: Constants.SORT_DIRECTION.ASCENDING,
      totalColumns: 0,
      dataList: new Array<any>(),
    };
  },
  created() {
    // Set defaultColumn data
    this.defaultColumn = this.columns;
    // Set Total number of columns
    this.totalColumns = this.defaultColumn.length;
    // Set DataList
    this.dataList = this.dataItemList;
  },
  mounted() {
    // Set default sort on column
    this.getSortOrder(this.sortBy);
    // Set Sort Order to every column
    this.sortOrders = this.defaultColumn.reduce(
      (obj: any, key: any) => ((obj[key.field] = 1), obj),
      {}
    );
  },
  computed: {
    filterTicketsData(): any[] {
      const sortKey: any = this.sortBy;
      const order = this.sortOrders[sortKey] || 1;
      let data: any = this.dataList;

      // Sort Data
      if (sortKey) {
        data = data.slice().sort((a: any, b: any) => {
          a = a[sortKey];
          b = b[sortKey];

          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  methods: {
    // Column Sorting
    sortColumn(field: any) {
      this.sortDirection = this.sortDirection == "asc" ? "desc" : "asc";
      this.sortBy = field;
      this.sortOrders[field] = this.sortOrders[field] * -1;
    },
    // Get Sort Order
    getSortOrder(key: any) {
      if (key == this.sortBy) {
        return this.sortOrders[key] > 0 ? "asc" : "desc";
      }
    },
  },
});
</script>
