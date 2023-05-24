import dayjs from 'dayjs'

export default function registerFormatTime(app) {
  let timestamp = new Date().getTime()
  let format = 'YY-MM-DD HH:mm:ss'
  app.directive('ftime', {
    created(el, bindings) {
      if (bindings.value) {
        format = bindings.value
      }
      if (el.textContent) {
        timestamp = el.textContent.length === 10 ? parseInt(el.textContent) * 1000 : parseInt(el.textContent)
      }
    },
    mounted(el) {
      el.textContent = dayjs(timestamp).format(format)
    }
  })
}
