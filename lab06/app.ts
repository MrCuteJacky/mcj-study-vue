declare var Vue: any;

const vue = new Vue({
    el: "#app",
    data() {
        return {
            plans: [],
            value: ''
        }
    },
    methods: {
        addPlan() {
            this.plans.push(this.value)
            this.value = ''
        }
    }
})
