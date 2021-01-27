Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increase1() {
            this.counter++
        },
        decrease1() {
            this.counter--
        },
        add(num) {
            this.counter += num
        }
    }
}).mount('#app')
