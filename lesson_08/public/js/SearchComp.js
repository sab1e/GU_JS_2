Vue.component('search', {
    data() {
        return {
            userSearch: '',
        }
    },
    template: `
        <div class="header-search f-left">
            <div class="header-search-inner">
               <button class="search-toggle">
                <i class="zmdi zmdi-search"></i>
               </button>
                <form action="#" @submit.prevent="$root.$refs.products.filter(userSearch)">
                    <div class="top-search-box">
                        <input type="text" placeholder="Search here your product..." v-model="userSearch">
                        <button type="submit">
                            <i class="zmdi zmdi-search"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>`
});