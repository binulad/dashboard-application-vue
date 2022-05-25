import { Adapter } from "@/adapter/adapter";
import { Products } from "@/products/model/products.model";

class ProductAdapterObj implements Adapter<Products[]> {
  /**
   * This will convert the response into Product object
   * @param products
   */
  public toResponse(products: Products[]): Products[] {
    const ProductArr: Products[] = [];

    products.forEach((data) => {
      const ProductsData: Products = new Products(
        data.id,
        data.title,
        data.price,
        data.description,
        data.category,
        data.image,
        data.rating
      );

      ProductArr.push(ProductsData);
    });

    return ProductArr;
  }
}

export const ProductAdapter = new ProductAdapterObj();
