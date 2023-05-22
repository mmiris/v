<template>
  <div>
    <h4>watchEffect</h4>
    <h2 ref="title">我是大表哥</h2>
    <button v-on:click="stopWatchEffect">stop</button>
    <button v-on:click="changeH2">changeH2</button>

    <h4>watch</h4>
    <div>{{ name }}</div>
    <button v-on:click="changeName">changeName</button>
    <br />
    <b>{{ age.number }}</b>
    <br />
    <button v-on:click="changeAge">changeAge</button>
    <template v-for="item in resume.skills">
      <div>{{ item }}</div>
    </template>
    <button v-on:click="changeSkills">changeSkills</button>
  </div>
</template>

<script>
import { reactive, ref, unref, watch, watchEffect } from 'vue'

export default {
  setup() {
    let title = ref(null)

    const effect = (onInvalidate) => {
      onInvalidate(() => {
        console.log('啊，我走啦！！！')
      })
      console.log(title.value)
    }

    const stopH2 = watchEffect(effect, { flush: 'post' })

    const stopWatchEffect = () => {
      stopH2()
    }

    const changeH2 = () => {
      title.value = '哈哈哈'
      console.log(title.value)
    }

    let name = ref('iris')
    let age = reactive({ number: 1 })
    let resume = reactive({ skills: ['吃饭', '睡觉', '喝水'] })

    // watch(name, (name, preName) => {
    //   console.log(`name: ${unref(name)} -- preName: ${unref(preName)}`)
    // })

    // watch(
    //   () => age.number,
    //   (number, preNumber) => {
    //     console.log(`age: ${number} -- preAge: ${preNumber}`)
    //   }
    // )

    watch([name, () => age.number], ([name, age], [preName, preAge]) => {
      console.log(`name: ${name} -- preName: ${preName}`)
      console.log(`age: ${age} -- preAge: ${preAge}`)
    })

    watch(
      () => resume.skills,
      (skills, preSkills) => {
        console.log(`skills: ${skills} -- preSkills: ${preSkills}`)
      },
      {
        deep: true
      }
    )

    const changeName = () => {
      name.value = 'naive'
    }

    const changeAge = () => {
      age.number = 9999
    }

    const changeSkills = () => {
      resume.skills.push('玩手机')
    }

    return { title, name, age, resume, stopWatchEffect, changeH2, changeName, changeAge, changeSkills }
  }
}
</script>
