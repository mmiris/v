function createApp(rootComponent) {
  return {
    mount(selector) {
      const container = document.querySelector(selector)
      let isMounted = false
      let vnode = null

      watchEffect(function () {
        if (!isMounted) {
          vnode = rootComponent.render()
          mount(vnode, container)
          isMounted = true
        } else {
          let vnode1 = rootComponent.render()
          patch(vnode1, vnode)
          vnode = vnode1
        }
      })
    }
  }
}
