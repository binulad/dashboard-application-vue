import { CartConstants } from "@/cart/constant";

const apiBaseURL = "https://fakestoreapi.com";

class Cart {
  // Get Limited card products
  getLimitedCardProduct(limit: number): Promise<any> {
    return fetch(
      `${apiBaseURL}/${CartConstants.API_URL.CARTS}?limit=${limit}`
    )
      .then((res) => res.json())
      .then((cartProducts) => {
        return cartProducts;
      });
  }

  // Update Product Cart
  updateProductCart(cartData: any, cartId: number): Promise<any> {
    return fetch(`${apiBaseURL}/${CartConstants.API_URL.CARTS}/${cartId}`, {
      method: "PUT",
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  }

  // Delete a Cart
  deleteCart(cartId: any): Promise<any> {
    return fetch(`${apiBaseURL}/${CartConstants.API_URL.CARTS}/${cartId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {return json});
  }

  // Add To Cart
  
}

export const CartServices = new Cart();