const productsList = () =>
  import(
    /* webpackChunkName: "productsList" */ "@/products/components/products-list-container/products-list.container.vue"
  );
const productsForm = () =>
  import(
    /* webpackChunkName: "productsForm" */ "@/products/components/products-form-container/products-form.container.vue"
  );

const ProductsRoutes = [
  {
    path: "",
    name: "Product Listing",
    component: productsList,
  },
  {
    path: "add",
    name: "Add Product",
    component: productsForm,
  },
  {
    path: "edit/:id",
    name: "Edit Product",
    component: productsForm,
  },
];

export default ProductsRoutes;