function h(tag, props, children) {
  return { tag, props, children }
}

function mount(vnode, container) {
  // vnode --> element
  let el = (vnode.el = document.createElement(vnode.tag))

  // 添加 props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]
      if (key.startsWith('on')) {
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 处理 children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach((item) => {
        mount(item, el)
      })
    }
  }

  container.appendChild(el)
}

const patch = (n1, n2) => {
  // n1, n2 不是同类型的 vnode （tag 不同）：移除 n2，挂载 n1
  // n1, n2 是同类型的对象：将 n2 的 el 赋值给 n1 的 el 及新的 el
  // 1. 处理 props：将 n1 的 props 全部加入 el，移除存在 n2 中但不存在 n1 中的多余的 props
  // 2. 处理 children
  // 2.1 n1 的 children 为字符串时：将 n2 的 children 赋值为 n1 的 children
  // 2.2 n1 的 children 为数组时
  // 2.2.1 n2 的 children 为字符串时，将 n2 的 children 赋值为空，然后挂载 n1 的 children
  // 2.2.2 n2 的 children 为数组时，取出较短的 children 逐一 patch，然后将剩余的新的 vnode 挂载，旧的 vnode 卸载

  if (n1.tag !== n2.tag) {
    let n2ElParent = n2.el.parentElement
    n2ElParent.removeChild(n2.el)
    mount(n1, n2ElParent)
  } else {
    let el = (n1.el = n2.el)
    const n1Props = n1.props || {}
    const n2Props = n2.props || {}
    for (const k in n1Props) {
      if (n1Props[k] !== n2Props[k]) {
        if (k.startsWith('on')) {
          el.addEventListener(k.slice(2).toLowerCase(), n1Props[k])
        } else {
          el.setAttribute(k, n1Props[k])
        }
      }
    }
    for (const k in n2Props) {
      if (k.startsWith('on')) {
        el.removeEventListener(k.slice(2).toLowerCase(), n2Props[k])
      }
      if (!(k in n1Props)) {
        el.removeAttribute(k)
      }
    }

    const n1Children = n1.children || {}
    const n2Children = n2.children || {}
    if (typeof n1Children === 'string') {
      el.innerHTML = n1Children
    } else {
      if (typeof n2Children === 'string') {
        el.innerHTML = ''
        for (const item in n1Children) {
          mount(item, el)
        }
      } else {
        const commonLen = Math.min(n1Children.length, n2Children.length)
        for (let i = 0; i < commonLen; i++) {
          patch(n1Children[i], n2Children[i])
        }
        if (n1Children.length > n2Children.length) {
          n1Children.slice(n2Children.length).forEach((item) => mount(item, el))
        } else if (n1Children.length < n2Children.length) {
          n2Children.slice(n1Children.length).forEach((item) => el.removeChild(item.el))
        }
      }
    }
  }
}
