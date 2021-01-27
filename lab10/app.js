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
    },
    computed: {
        div1Classes() {
            return {isSelected: this.divSelectedStatus[0]}
        },
        div2Classes() {
            return {isSelected: this.divSelectedStatus[1]}
        },
        div3Classes() {
            return {isSelected: this.divSelectedStatus[2]}
        }
    }
}).mount('#app')
