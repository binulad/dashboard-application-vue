import { ProductAdapter } from "./../adapter/products.adapter";
import { Http } from "@/services/http-client";
import { ProductConstants } from "../constants";

class Product {
  // Get Products List
  getProducts(): Promise<any> {
    return Http.get(`${ProductConstants.API_URL.PRODUCTS}`).then(
      (productResponse: any) => {
        return ProductAdapter.toResponse(productResponse.data);
      }
    );
  }
}

export const ProductServices = new Product();
