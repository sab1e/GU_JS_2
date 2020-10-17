Vue.component('full-cart', {
    data() {
        return {
            cartItems: this.$root.$refs.cart.cartItems,
            cartAPI: this.$root.$refs.cart,
        }
    },

    template: `
        <section id="page-content" class="page-wrapper">

            <!-- SHOP SECTION START -->
            <div class="shop-section mb-80">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 col-sm-12">
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <!-- shopping-cart start -->
                                <div class="tab-pane active" id="shopping-cart">
                                    <div class="shopping-cart-content">
                                        <form action="#">
                                            <div class="table-content table-responsive mb-50">
                                                <table class="text-center">
                                                    <thead>
                                                        <tr>
                                                            <th class="product-thumbnail">product</th>
                                                            <th class="product-price">price</th>
                                                            <th class="product-quantity">Quantity</th>
                                                            <th class="product-subtotal">total</th>
                                                            <th class="product-remove">remove</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    
                                                        <!-- tr -->
                                                        <full-cart-item 
                                                        v-for="item of cartItems"
                                                        :key="item.id_product"
                                                        :cart-item="item">
                                                        </full-cart-item>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <!-- shopping-cart end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- SHOP SECTION END -->             

        </section>`
});

Vue.component('full-cart-item', {
    props: ['cartItem'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },
    template: `
        <tr>
            <td class="product-thumbnail">
                <div class="pro-thumbnail-img">
                    <img src="img/cart/1.jpg" alt="">
                </div>
                <div class="pro-thumbnail-info text-left">
                    <h6 class="product-title-2">
                        <a href="#" @click="$root.changeTab('single_product'); $root.changeProduct(item.id_product)">{{cartItem.product_name}}</a>
                    </h6>
                </div>
            </td>
            <td class="product-price">{{cartItem.price}} ₽</td>
            <td class="product-price">{{cartItem.quantity}}</td>
            <td class="product-subtotal">{{cartItem.quantity*cartItem.price}}₽</td>
            <td class="product-remove">
                <a href="#" @click="cartAPI.remove(cartItem);"><i class="zmdi zmdi-close"></i></a>
            </td>
        </tr>`
});