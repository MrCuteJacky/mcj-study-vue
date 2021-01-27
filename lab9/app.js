Vue.createApp({
    data() {
        return {
            issue: 'xyz'
        }
    },
    methods: {
        setIssue(event) {
            this.issue = event.target.value
        },
        resetIssue() {
            this.issue = ''
        }
    }
}).mount('#app1')

Vue.createApp({
    data() {
        return {
            issue: 'xyz'
        }
    },
    methods: {
        resetIssue() {
            this.issue = ''
        }
    }
}).mount('#app2')
