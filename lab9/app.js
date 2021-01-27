Vue.createApp({
    data() {
        return {
            issue: 'xyz',
            counter: 0
        }
    },
    methods: {
        increase() {
            this.counter++;
        },
        outputIssue() {
            console.log('calculate output issue!')
            return `${this.issue === '' ? '' : '[!!!!]'} ${this.issue}`
        },
        resetIssue() {
            this.issue = ''
        }
    }
}).mount('#app')
