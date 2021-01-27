const app = Vue.createApp({
    data() {
        return {
            goal1: "Have a happy life!",
            goal2: "Have a health body!",
            goal3: "Have a <mark>strong</mark> mind!",
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
