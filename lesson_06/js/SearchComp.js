Vue.component('search', {
    data() {
        return {
            userSearch: '',
        }
    },
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter(userSearch)">
            <input type="text" v-model="userSearch" class="search-field">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>`
});