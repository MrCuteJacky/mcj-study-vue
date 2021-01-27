const app = Vue.createApp({
    data() {
        return {
            primaryGoal: "Have a happy life!",
            secondGoal: "Have a health body!",
            planLink: "http://www.trello.com",
            goals: [
                "0, Have a happy life!",
                "1, Have a health body!",
                "2, Have a strong mind!"
            ]
        }
    },
    methods: {
        sample1: function() {},
        sample2: () => {},
        sample3() {},
        outputMessage() {
            const index = Math.floor(Math.random() * 3)
            console.log(this.goals[index])
            return this.goals[index];
        }
    }
})
app.mount('#my-planner')
