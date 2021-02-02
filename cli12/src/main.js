import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
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
