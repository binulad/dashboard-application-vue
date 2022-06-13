import { ProductAdapter } from "./../adapter/products.adapter";
import { ProductConstants } from "../constants";

const apiBaseURL = "https://fakestoreapi.com";

class Product {
  // Get Products List
  getProducts(): Promise<any> {
    return fetch(`${apiBaseURL}/${ProductConstants.API_URL.PRODUCTS}`)
      .then((res) => res.json())
      .then((productResponse: any) => {
        return ProductAdapter.toResponse(productResponse);
      });
  }

  // Get Product From ID
  getProductById(productId: any): Promise<any> {
    return fetch(
      `${apiBaseURL}/${ProductConstants.API_URL.PRODUCTS}/${productId}`
    )
      .then((res) => res.json())
      .then((productResponse: any) => {
        return productResponse;
      });
  }

  // Add Product Data
  addProduct(productData: any): Promise<any> {
    return fetch(`${apiBaseURL}/${ProductConstants.API_URL.PRODUCTS}`, {
      method: "POST",
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }

  // Get all categories
  getAllCategories(): Promise<any> {
    return fetch(
      `${apiBaseURL}/${ProductConstants.API_URL.PRODUCTS}/${ProductConstants.API_URL.CATEGORIES}`
    )
      .then((res) => res.json())
      .then((categories) => {
        return categories;
      });
  }

  // Get products in a specific category
  getProductsByCategory(categoryName: string): Promise<any> {
    return fetch(
      `${apiBaseURL}/${ProductConstants.API_URL.PRODUCTS}/category/${categoryName}`
    )
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }

  // Get Limited card products
  getLimitedCardProduct(limit: number): Promise<any> {
    return fetch(
      `${apiBaseURL}/${ProductConstants.API_URL.CARTS}?limit=${limit}`
    )
      .then((res) => res.json())
      .then((cartProducts) => {
        return cartProducts;
      });
  }
}

export const ProductServices = new Product();
