class Dep {
  constructor() {
    this.subscriber = []
  }
  depend() {
    if (activeEffect) {
      this.subscriber.push(activeEffect)
    }
  }
  notify() {
    this.subscriber.forEach((dep) => dep())
  }
}

let activeEffect = null
const watchEffect = (effect) => {
  activeEffect = effect
  effect()
  activeEffect = null
}

let targetsMap = new WeakMap()
const getDep = (target, key) => {
  let depsMap = targetsMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetsMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Dep()
    depsMap.set(key, dep)
  }
  return dep
}

const reactive = (raw) => {
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key)
      dep.depend()
      return target[key]
    },
    set(target, key, value) {
      const dep = getDep(target, key)
      if (target[key] !== value) {
        target[key] = value
        dep.notify()
      }
    }
  })
}

// let info = reactive({ name: 'shadow', age: 2 })
// let scores = reactive({ eatting: 88, sleeping: 99, playing: 11 })

// console.log('-----------raw start-----------')
// watchEffect(function () {
//   console.log('函数1 -- info.name >> ', info.name)
// })

// watchEffect(function () {
//   console.log('函数2 -- scores.eatting >> ', scores.eatting)
// })

// watchEffect(function () {
//   console.log('函数3 -- name.info + scores.eatting >> ', info.name, scores.eatting)
// })
// console.log('-----------raw end-----------\n')

// console.log('-----------change info.name start-----------')
// info.name = 'naive'
// console.log('-----------change info.name end-----------\n')

// console.log('-----------change scores.eatting start-----------')
// scores.eatting = 99.9
// console.log('-----------change scores.eatting end-----------\n')
