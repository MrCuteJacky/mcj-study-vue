import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('app', {
    App
})
app.mount('#app')
