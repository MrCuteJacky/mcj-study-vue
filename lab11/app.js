Vue.createApp({
    data() {
        return {
            courseContent: '',
            courses: []
        }
    },
    methods: {
        addCourse() {
            this.courses.push(this.courseContent)
        }
    },
    computed: {
    }
}).mount('#app')
