Vue.component('single_product', {
data() {
    return {
        product: '',
        cartAPI: this.$root.$refs.cart,
    }
},
props: ['currentProduct'],
mounted() {
    this.$parent.getJson(`/api/product/${this.$root.currentProduct}`)
        .then(data => {
            this.product = data
        })
},

template: `
    <section id="page-content" class="page-wrapper">

        <!-- SHOP SECTION START -->
        <div class="shop-section mb-80">
            <div class="container">
                <div class="row">
                    <div class="col-md-9 col-xs-12">
                        <!-- single-product-area start -->
                        <div class="single-product-area mb-80">
                            <div class="row">
                                <!-- imgs-zoom-area start -->
                                <div class="col-md-5 col-sm-5 col-xs-12">
                                    <div class="imgs-zoom-area">
                                        <img id="zoom_03" src="img/product/6.jpg" data-zoom-image="img/product/6.jpg" alt="">
                                    </div>
                                </div>
                                <!-- imgs-zoom-area end -->
                                <!-- single-product-info start -->
                                <div class="col-md-7 col-sm-7 col-xs-12">
                                    <div class="single-product-info">
                                        <h3 class="text-black-1">{{product.product_name}}</h3>
                                        <h6 class="brand-name-2">{{product.price}}₽</h6>
                                        <!-- hr -->
                                        <hr>
                                        <!-- single-product-tab -->
                                        <div class="single-product-tab">
                                            <ul class="reviews-tab mb-20">
                                                <li  class="active"><a href="#" data-toggle="tab">description</a></li>
                                            </ul>
                                            <div class="tab-content">
                                                <div role="tabpanel" class="tab-pane active" id="description">
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majo Rity have be suffered alteration in some form, by injected humou or randomis Rity have be suffered alteration in some form, by injected humou or randomis words which donot look even slightly believable. If you are going to use a passage Lorem Ipsum.</p>
                                                </div>
                                                <div role="tabpanel" class="tab-pane" id="information">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, neque fugit inventore quo dignissimos est iure natus quis nam illo officiis,  deleniti consectetur non ,aspernatur.</p>
                                                    <p>rerum blanditiis dolore dignissimos expedita consequatur deleniti consectetur non exercitationem.</p>
                                                </div>
                                                <div role="tabpanel" class="tab-pane" id="reviews">
                                                    <!-- reviews-tab-desc -->
                                                    <div class="reviews-tab-desc">
                                                        <!-- single comments -->
                                                        <div class="media mt-30">
                                                            <div class="media-left">
                                                                <a href="#"><img class="media-object" src="img/author/1.jpg" alt="#"></a>
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="clearfix">
                                                                    <div class="name-commenter pull-left">
                                                                        <h6 class="media-heading"><a href="#">Gerald Barnes</a></h6>
                                                                        <p class="mb-10">27 Jun, 2016 at 2:30pm</p>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <ul class="reply-delate">
                                                                            <li><a href="#">Reply</a></li>
                                                                            <li>/</li>
                                                                            <li><a href="#">Delate</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas .</p>
                                                            </div>
                                                        </div>
                                                        <!-- single comments -->
                                                        <div class="media mt-30">
                                                            <div class="media-left">
                                                                <a href="#"><img class="media-object" src="img/author/2.jpg" alt="#"></a>
                                                            </div>
                                                            <div class="media-body">
                                                                <div class="clearfix">
                                                                    <div class="name-commenter pull-left">
                                                                        <h6 class="media-heading"><a href="#">Gerald Barnes</a></h6>
                                                                        <p class="mb-10">27 Jun, 2016 at 2:30pm</p>
                                                                    </div>
                                                                    <div class="pull-right">
                                                                        <ul class="reply-delate">
                                                                            <li><a href="#">Reply</a></li>
                                                                            <li>/</li>
                                                                            <li><a href="#">Delate</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas .</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--  hr -->
                                        <hr>
                                        <!-- plus-minus-pro-action -->
                                        <div class="plus-minus-pro-action">
                                            <div class="sin-pro-action f-right">
                                                <ul class="action-button">
                                                    <li>
                                                        <a href="#" @click="cartAPI.addProduct(product)" title="Add to cart" tabindex="0"><i class="zmdi zmdi-shopping-cart-plus"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- single-product-info end -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
});