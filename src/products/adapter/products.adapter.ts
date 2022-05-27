import { AddProducts, EditProducts } from "./../model/products.model";
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

class ProductEditAdapterObj implements Adapter<EditProducts> {
  /**
   * This will convert the response into Product object
   * @param data
   */

  public toResponse(data: EditProducts): EditProducts {
    const editProductData: EditProducts = new EditProducts(
      data.id,
      data.title,
      data.price,
      data.description,
      data.image,
      data.category,
    );

    return editProductData;
  }
}

export const ProductEditAdapter = new ProductEditAdapterObj();

class ProductAddAdapterObj implements Adapter<AddProducts> {
  /**
   * This will used to convert object into Product request object
   * @param product
   */
  public toRequest(product: AddProducts): AddProducts {
    const productData: AddProducts = new AddProducts(
      product.title,
      product.price,
      product.description,
      product.image,
      product.category,
    );

    return productData;
  }
}

export const ProductAddAdapter = new ProductAddAdapterObj();
