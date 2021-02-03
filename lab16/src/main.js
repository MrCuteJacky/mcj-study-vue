import {createApp} from 'vue'
import {VuelidatePlugin} from '@vuelidate/core'
import App from './App.vue'

createApp(App).use(VuelidatePlugin).mount('#app')
