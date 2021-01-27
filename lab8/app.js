Vue.createApp({
    data() {
        return {
            counter: 0,
            todo: '',
            urgent: '',
            checkedUrgent: '',
            counter2: 400,
            helloCount: 1
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
        add2(num) {
            this.counter2 += num
        },
        setTodo(event) {
            this.todo = event.target.value
        },
        setTodoAndPrefix(event, prefix) {
            this.todo = `${prefix} ${event.target.value}`
        },
        submitForm1(event) {
            console.log(event)
            alert('submit.')
        },
        submitForm2(event) {
            event.preventDefault()
            console.log(event)
            alert('submit.')
        },
        setUrgent(event) {
            this.urgent = event.target.value
        },
        commitUrgent(event) {
            this.checkedUrgent = this.urgent
        },
        enter(event) {
            alert(event.key)
        }
    }
}).mount('#app')
