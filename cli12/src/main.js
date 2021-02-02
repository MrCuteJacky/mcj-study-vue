import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('course-content', {
    App
})
app.mount('#app')
