Vue.component('home', {
    data() {
        return {
            product: '',
        }
    },

    mounted() {
        this.$parent.getJson(`/api/hot`)
            .then(data => {
                this.product = data
            })
    },
    template: `
        <div id="page-content" class="page-wrapper">
            <error ref="error"></error>

            <div class="slider-area  plr-185  mb-80">
            <div class="container-fluid">
                <div class="slider-content">
                    <div class="row">
                        <div class="active-slider-1 slick-arrow-1 slick-dots-1">
                            <!-- layer-1 Start -->
                            <div class="col-md-12">
                                <div class="layer-1">
                                    <div class="slider-img">
                                        <img src="img/slider/slider-1/1.jpg" alt="">
                                    </div>
                                    <div class="slider-info gray-bg">
                                        <div class="slider-info-inner">
                                            <h1 class="slider-title-1 text-uppercase text-black-1">{{product.product_name}}</h1>
                                            <div class="slider-brief text-black-2">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                                            </div>
                                            <a href="#" @click="$root.changeTab('single_product'); $root.changeProduct(product.id_product)" class="button extra-small button-black">
                                                <span class="text-uppercase">Buy now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- layer-1 end -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>`
});

