const app = Vue.createApp({
    data() {
        return {
            primaryGoal: "Have a happy life!",
            secondGoal: "Have a health body!",
            planLink: "http://www.trello.com"
        }
    },
    methods: {
        sample1: function() {},
        sample2: () => {},
        sample3() {},
        outputMessage() {
            const n1 = Math.random()
            if (n1 < 0.3) {
                return 'work hard'
            } else {
                return 'work harder'
            }
        }
    }
})
app.mount('#my-planner')
