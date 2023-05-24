import { createApp } from 'vue'

import App from '@/App.vue'
import registerDirectives from '@/directives'
import plugins from '@/plugins'

const app = createApp(App)

// app.directive('focus', {
//   mounted(el) {
//     el.focus()
//   }
// })

// registerDirectives(app)
app.use(plugins)

app.mount('#app')
