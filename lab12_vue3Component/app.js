const app = Vue.createApp({
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
})
app.component('course-content', {
    props: ['course'],
    template: `
        <li>
            <h2>{{course.id}}</h2>
            <button @click="toggleCourseDetail">show detail</button>
            <ul v-if="detailsVisible">
                <li>{{course.name}}</li>
                <li>{{course.duration}}</li>
            </ul>
        </li>`,
    data() {
        return {
            detailsVisible: true
        }
    },
    methods: {
        toggleCourseDetail() {
            this.detailsVisible = !this.detailsVisible
        }
    }
})
app.mount('#app')
