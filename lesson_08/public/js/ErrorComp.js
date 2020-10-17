Vue.component('error', {
    data() {
        return {
            errorText: ''
        }
    },
    methods: {
        setErrorText(error) {
            this.errorText = error
        }
    },
    computed: {
        showError() {
            return this.errorText !== ''
        }
    },
    template: `
    <div class="error-msg" v-if="showError">
        <p class="error-text">
            <button class="close-btn-error" @click="setErrorText('')">&times;</button>
            {{ errorText }}
        </p>
    </div>`
});