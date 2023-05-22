import { ref, watch } from 'vue'

export default () => {
  let title = ref(document.title)

  watch(title, (title, preTitle) => {
    console.log(`Warnning: title from ${preTitle} to be ${title}`)
    document.title = title
  })

  return title
}
