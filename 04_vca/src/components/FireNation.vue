<script>
import { h } from 'vue'
import ZhuqueTerrace from './ZhuqueTerrace.vue'

export default {
  render() {
    return h('h3', null, [
      h('p', null, '火国'),
      h(ZhuqueTerrace, null, { default: (props) => h('div', null, `${props}`) })
    ])
  }
}
</script>
