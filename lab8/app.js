Vue.createApp({
    data() {
        return {
            counter: 0,
            todo: ''
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
        },
        setTodo(event) {
            this.todo = event.target.value
        },
        setTodoAndPrefix(event, prefix) {
            this.todo = `${prefix} ${event.target.value}`
        }
    }
}).mount('#app')
