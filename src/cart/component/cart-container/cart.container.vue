<template>
  <CartPresentation
    :productDetail="productDetail"
    @onClick="onClickButton($event)"
    @onClose="onClickClose($event)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CartConstants } from "@/cart/constant";
import CartPresentation from "@/cart/component/cart-container/cart-presentation/cart.presentation.vue";
import { ProductServices } from "@/products/services/products.service";
import { CartServices } from "@/cart/services/cart.service";

export default defineComponent({
  name: CartConstants.NAME.CART_CONTAINER,
  components: {
    CartPresentation,
  },
  data() {
    return {
      cartLimitedProducts: new Array<any>(),
      cartLimit: 5,
      productDetail: new Array<any>(),
      cardProducts: new Array<any>(),
      userId: 1,
      cartId: 1,
    };
  },
  created() {
    this.getCartLimitedData();
  },
  methods: {
    // Method called for get Product Data from ID
    getProductData(productData: any) {
      ProductServices.getProductById(productData.productId).then((response) => {
        response.quantity = productData.quantity;
        this.productDetail.push(response);
      });
    },

    // Called while get Cart Products
    getCartLimitedData() {
      CartServices.getLimitedCardProduct(this.cartLimit).then((response) => {
        this.cartLimitedProducts = response.filter(
          (cart: any) => cart.userId == this.userId && cart.id == this.cartId
        );

        this.cardProducts = this.cartLimitedProducts[0].products;
        this.cardProducts.forEach((element) => {
          this.getProductData(element);
        });
      });
    },

    // Method Called while update the Product Cart
    updateCart(cartData: any, cartId: number) {
      CartServices.updateProductCart(cartData, cartId).then((response) => {
        this.productDetail = response;

        console.log("Update Cart", this.productDetail);
        
      });
    },

    // Method called while click on Minus
    onClickButton(productId: number) {
      console.log("Click on Button", productId);
      
      // const product: any = this.productDetail.filter(
      //   (product: any) => product.id == productId
      // );
      // const productData = JSON.parse(JSON.stringify(product));

      // const productQuantity = productData[0].quantity - 1;
      // console.log(productQuantity);

      // const currentDate = new Date();
      // console.log(currentDate);

      // const cartDetails = {
      //   userId: this.userId,
      //   date: currentDate,
      //   products: [{ productId: productId, quantity: productQuantity }],
      // };

      // this.updateCart(cartDetails, this.cartId);
    },

    // MEthod called while click on Close
    onClickClose(productId: number) {
      CartServices.deleteCart(1).then(() => {
        console.log("Deleted");        
      })
    }
  },
});
</script>
