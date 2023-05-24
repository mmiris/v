export default function registerInputFocus(app) {
  app.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })
}
