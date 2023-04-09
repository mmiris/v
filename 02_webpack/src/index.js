const { format } = require('$js/format.js')

import multiply from '$js/math.js'

import '$js/show.js'

import { createApp } from 'vue'

import App from './HelloWorld'

import axios from 'axios'

console.log(multiply(9, 9))
format()

const greeting = 'Hello Webpack!'

console.log(greeting)

// axios
//   .get('/api')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// console.log('你好呀！')

// const App = {
//   template: '<h2>{{greeting}}</h2>',
//   data() {
//     return {
//       greeting: 'Hello Vue!'
//     }
//   }
// }

if (module.hot) {
  module.hot.accept('./js/show', () => {
    console.log('show is now updated.')
  })
}

createApp(App).mount('#app')
