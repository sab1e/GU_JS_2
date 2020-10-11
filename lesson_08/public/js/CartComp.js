Vue.component('cart', {
    data() {
        return {
            imgCart: 'https://placehold.it/50x100',
            cartItems: [],
            showCart: false,
        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/carpt/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartItems.push(prod);
                        }
                    });
            }
        },

        remove(product) {
            this.$parent.deleteJson(`/api/cart/${product.id_product}`, {quantity: 1})
                .then(data => {
                    if(data.result === 1) {
                        if(product.quantity>1) {
                            product.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        },
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
        .then(data => {
            for(let el of data.contents) {
                if (el.quantity) {
                    this.cartItems.push(el)
                }
            }
        });
    },
    template: `
        <div class="total-cart f-left">
            <div class="total-cart-in">
                <div class="cart-toggler">
                    <a href="#">
                        <span class="cart-quantity">02</span><br>
                        <span class="cart-icon">
                            <i class="zmdi zmdi-shopping-cart-plus"></i>
                        </span>
                    </a>
                </div>
                <ul>
                    <li>
                        <div class="top-cart-inner your-cart">
                            <h5 class="text-capitalize">Your Cart</h5>
                        </div>
                    </li>
                    <li>
                        <div class="top-cart-inner your-cart" v-if="!cartItems.length">
                            <h5 class="text-capitalize">Корзина пуста</h5>
                        </div>
                        <div class="total-cart-pro">
                            <cart-item 
                                v-for="item of cartItems"
                                :key="item.id_product"
                                :cart-item="item"
                                :img="imgCart"
                                @remove="remove">
                            </cart-item>
                        </div>
                    </li>
                    <li>
                        <div class="top-cart-inner subtotal">
                            <h4 class="text-uppercase g-font-2">
                                Total  =
                                <span>$ 500.00</span>
                            </h4>
                        </div>
                    </li>
                    <li>
                        <div class="top-cart-inner view-cart">
                            <h4 class="text-uppercase">
                                <a href="#">View cart</a>
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>`
});

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template:`
       <div class="single-cart clearfix">
           <div class="cart-img f-left">
               <a href="#">
                   <img :src="img" alt="Cart Product" />
               </a>
               <div class="del-icon">
                   <a href="#" @click="$emit('remove', cartItem)">
                       <i class="zmdi zmdi-close"></i>
                   </a>
               </div>
           </div>
           <div class="cart-info f-left">
               <h6 class="text-capitalize">
                   <a href="#">{{cartItem.product_name}}</a>
               </h6>
               <p>
                   <span>Цена<strong>:</strong></span>{{cartItem.price}} ₽
               </p>
               <p>
                   <span>Кол.<strong>:</strong></span>{{cartItem.quantity}}
               </p>
               <p>
                   <span>Поз.<strong>:</strong></span>{{cartItem.quantity*cartItem.price}}₽
               </p>
           </div>
       </div>`
});
