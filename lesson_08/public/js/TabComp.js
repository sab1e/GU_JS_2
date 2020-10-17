Vue.component('tabs', {
    props: ['currentTab', 'tabs'],
    data() {
        return {

        }
    },
    template: `
        <div class="col-md-8 hidden-sm hidden-xs">
            <nav id="primary-menu">
                <ul class="main-menu text-center">
                    <tab-item
                        v-for="tab of tabs"
                        :key="tab"
                        :tab="tab"
                        :currentTab="currentTab"
                    ></tab-item>
                </ul>
            </nav>
        </div>`
});

Vue.component('tab-item', {
    props: ['tab', 'currentTab', 'tab'],
    data() {
        return {
        }
    },
    template: `
        <li>
            <a href="#" @click="$root.changeTab(tab)">{{tab}}</a>
        </li>`
});