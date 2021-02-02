Vue.createApp({
    data() {
        return {
            courses: [
                {id: 'POOP', name: 'Python OOP Programming', duration: 35},
                {id: 'BDPY', name: 'Python and big data', duration: 35}
            ],
            detailsVisible: true
        }
    },
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible
        }
    },
    computed: {}
}).mount('#app')
