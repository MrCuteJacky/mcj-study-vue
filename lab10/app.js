Vue.createApp({
    data() {
        return {
            divSelectedStatus: [false, false, false]
        }
    },
    methods: {
        divSelected(index) {
            console.log(`click ${index}`)
            this.divSelectedStatus[index] = !this.divSelectedStatus[index]
        }
    }
}).mount('#app')
