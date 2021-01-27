const app = Vue.createApp({
    data() {
        return {
            primaryGoal: "Have a happy life!",
            secondGoal: "Have a health body!",
            planLink: "http://www.trello.com"
        }
    },
    methods: {}
})
app.mount('#my-planner')
