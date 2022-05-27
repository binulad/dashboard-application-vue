const ProductConstants = {
  NAME: {
    PRODUCTS_CONTAINER: "ProductsContainer",
    PRODUCTS_LIST_CONTAINER: "ProductsListContainer",
    PRODUCTS_LIST_PRESENTATION: "ProductsListPresentation",
    PRODUCTS_FORM_CONTAINER: "ProductsFormContainer",
    PRODUCTS_FORM_PRESENTATION: "ProductsFormPresentation",
    PRODUCTS_DESCRIPTION_CONTAINER: "ProductsDescriptionContainer",
    PRODUCTS_DESCRIPTION_PRESENTATION: "ProductsDescriptionPresentation",
    PRODUCTS_CATEGORY_PRESENTATION: "ProductsCategoryPresentation",
  },
  API_URL: {
    PRODUCTS: "products",
    CATEGORIES: "categories",
    CARTS: "carts",
  },
  ROUTE: {
    ADD: "Add Product",
    EDIT: "Edit Product",
    DEFAULT: "Product Listing",
    DETAILS: "View Product",
  },
  VALIDATION_MESSAGE: {
    REQUIRED: "This field is required"
  },
  PRODUCT_CATEGORY: [
    {
      name: "electronics",
      value: 1
    },
    {
      name: "jewelry",
      value: 2
    },
    {
      name: "men's clothing",
      value: 3
    },
    {
      name: "women's clothing",
      value: 4
    },
    {
      name: "other",
      value: 5
    },
  ]
};

export { ProductConstants };
