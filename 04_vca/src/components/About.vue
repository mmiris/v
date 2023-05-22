<template>
  <h2>About</h2>

  <h4>isProxy</h4>
  <ul>
    <li>nameJudge: {{ nameJudge }}</li>
    <li>ageJudge: {{ ageJudge }}</li>
    <li>addrJudge: {{ addrJudge }}</li>
  </ul>

  <h4>shallowRef-triggerRef</h4>
  <template v-for="(v, k) in email">
    <strong>{{ k }}</strong>
    <template v-for="item in v">
      <div>{{ item }}</div>
    </template>
  </template>
  <button v-on:click="changeOutlookEmail">changeOutlookEmail</button>
  <button v-on:click="forceRefresh">forceRefresh</button>

  <h4>unref</h4>
  <button v-on:click="showEmail">showEmail</button>

  <h4>customRef</h4>
  <input type="text" v-model="msg" placeholder="你过来呀！！！" />
  <br />
  <b> {{ msg }} </b>
  <br />
  <input type="text" v-model="msg1" />
  <br />
  <b> {{ msg1 }} </b>

  <h4>computed</h4>
  <div>fullName: {{ fullName }}</div>
  <button v-on:click="changeName">changeName</button>
  <div>fullName1: {{ fullName1 }}</div>
  <button v-on:click="changeName1">changeName1</button>
</template>

<script>
import { ref, reactive, readonly, isProxy, shallowRef, triggerRef, unref, customRef, computed } from 'vue'

export default {
  setup() {
    const profile = reactive({ name: 'shadow' })
    const info = readonly(profile)
    const addr = ref('天那边')
    let email = shallowRef({ google: ['shadow@google.com'], outlook: ['shadow@outlook.com', 'iris@ootlook.com'] })

    let nameJudge = isProxy(profile)
    let ageJudge = isProxy(info)
    let addrJudge = isProxy(addr)

    const changeOutlookEmail = () => {
      email.value.outlook[1] = 'naive@outlook.com'
      console.log('滴滴滴～～～～')
    }

    const forceRefresh = () => {
      changeOutlookEmail()
      triggerRef(email)
    }

    const showEmail = () => {
      const unwrappedEmail = unref(email)
      console.log(unwrappedEmail)
      console.log(email)
      const unwrappedAddr = unref(addr)
      console.log(unwrappedAddr)
      console.log(addr)
    }

    const debounceRef = (value, delay = 2000) => {
      let timer = null

      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newValue) {
            timer && clearTimeout(timer)
            setTimeout(() => {
              value = newValue
              trigger()
            }, delay)
          }
        }
      })
    }

    let msg = ref('若有一天，。。。')
    let msg1 = debounceRef('若有一天， 。。。')

    let firstName = ref('naive')
    let lastName = ref('iris')

    let fullName = computed(() => firstName.value + ' ' + lastName.value)
    let fullName1 = computed({
      get() {
        return `${firstName.value} ${lastName.value}`
      },
      set(value) {
        const temp = value.split(' ')
        firstName.value = temp[0]
        lastName.value = temp[1]
      }
    })

    const changeName = () => {
      fullName = 'naive shadow'
    }

    const changeName1 = () => {
      fullName1.value = 'naive mmiris'
    }

    return {
      nameJudge,
      ageJudge,
      addrJudge,
      email,
      msg,
      msg1,
      fullName,
      fullName1,
      changeOutlookEmail,
      forceRefresh,
      showEmail,
      changeName,
      changeName1
    }
  }
}
</script>
