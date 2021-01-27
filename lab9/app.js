Vue.createApp({
    data() {
        return {
            issue: 'xyz',
            counter: 0
        }
    },
    computed: {
        outputIssue() {
            console.log('calculate output issue!')
            return `${this.issue === '' ? '' : '[!!!!]'} ${this.issue}`
        }
    },
    methods: {
        increase() {
            this.counter++;
        },
        resetIssue() {
            this.issue = ''
        }
    }
}).mount('#app')
