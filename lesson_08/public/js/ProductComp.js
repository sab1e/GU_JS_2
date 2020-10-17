Vue.component('products', {
    data() {
        return {
            imgCatalog: 'https://placehold.it/200x150',
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <section id="page-content" class="page-wrapper">
            <!-- SHOP SECTION START -->
            <div class="shop-section mb-80">
                <div class="container">
                    <div class="row">
                        <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
                    </div>
                </div>
            </div>
            <!-- SHOP SECTION END -->
        </section>`
});

Vue.component('product', {
    props: ['product', 'img'],
    data() {
        return {
            cartAPI: this.$root.$refs.cart,
        };
    },
    template: `
    <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="product-item">
            <div class="product-img">
                <a href="#" @click="$root.changeTab('single_product'); $root.changeProduct(product.id_product)">
                    <img src="img/product/7.jpg" alt=""/>
                </a>
            </div>
            <div class="product-info">
                <h6 class="product-title">
                    <a href="#" @click="$root.changeTab('single_product'); $root.changeProduct(product.id_product)">{{product.product_name}}</a>
                </h6>
                <h3 class="pro-price">{{product.price}}₽</h3>
                <ul class="action-button">
                    <li>
                        <a href="#" title="Add to cart" @click="cartAPI.addProduct(product)"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>`
});
