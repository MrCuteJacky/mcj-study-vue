Vue.createApp({
    data() {
        return {
            courseContent: Math.random(),
            courses: []
        }
    },
    methods: {
        addCourse() {
            this.courses.push(this.courseContent)
            this.courseContent = Math.random()
        },
        removeCourse(index) {
            this.courses.splice(index, 1);
        }
    },
    computed: {
    }
}).mount('#app')
