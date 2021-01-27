Vue.createApp({
    data() {
        return {
            issue: 'xyz',
            formatIssue: '',
            counter: 0,
            issue2: 'hello',
            issue3: 'world'
        }
    },
    computed: {
        outputIssue() {
            console.log('calculate output issue!')
            return `${this.issue === '' ? '' : '[!!!!]'} ${this.issue}`
        }
    },
    watch: {
        issue(newValue, oldValue) {
            console.log('on change issue.')
            this.formatIssue = `change ${oldValue} to ${newValue}`
        },
        counter(newValue, oldValue) {
            if (newValue > 10) {
                this.counter = 0
                console.log('reset counter')
            }
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
