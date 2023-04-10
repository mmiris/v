import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css'

let app = createApp(App)

app.config.unwrapInjectedRef = true

app.mount('#app')
