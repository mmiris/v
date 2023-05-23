<script>
import { h } from 'vue'

export default {
  render() {
    return h('div', null, [
      h('div', { style: { color: 'red' } }, '哈哈哈哈'),
      this.$slots.default
        ? this.$slots.default('朱雀坞')
        : h('p', { style: { color: 'tomato' } }, '插槽默认值')
    ])
  }
}
</script>
