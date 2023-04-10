<template>
  <h2>{{ name }}</h2>
  <about-nav v-bind:navigations="navigations">
    <template v-slot:default="slotProps">
      <i>{{ slotProps.item }}</i>
    </template>

    <template v-slot:shadow="slotProps">
      <h2>{{ slotProps.addr }}</h2>
    </template>
  </about-nav>
  <hr />

  <button v-on:click="currentCpn = !currentCpn">trigger</button>
  <!-- <transition name="shadow" mode="out-in" type="animation" appear>
    <component :is="currentCpn ? 'about-naive' : 'about-iris'"></component>
  </transition> -->
  <transition mode="out-in" enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated animate__fadeOutDown">
    <component :is="currentCpn ? 'about-naive' : 'about-iris'"></component>
  </transition>

  <hr />
  <button v-on:click="addFigure">addFigure</button>
  <button v-on:click="delFigure">delFigure</button>
  <button v-on:click="shuffleFigures(figures)">shuffleFigures</button>
  <transition-group tag="p" name="naive">
    <span v-for="figure in figures" :key="figure">{{ figure }}</span>
  </transition-group>

  <hr />
  <input type="text" v-model="keywords" />
  <transition-group tag="ul" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
    <li v-for="(potato, index) in showPotatos" :key="potato" :data-index="index">{{ potato }}</li>
  </transition-group>
</template>

<script>
import gsap from 'gsap'
import AboutNav from './AboutNav.vue'
import AboutNaive from './AboutNaive.vue'
import AboutIris from './AboutIris.vue'

export default {
  components: {
    AboutNav,
    AboutNaive,
    AboutIris
  },
  data() {
    return {
      name: 'About',
      navigations: ['contact us', 'team info', 'cooperation'],
      currentCpn: 1,
      figures: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      keywords: '',
      potatos: ['石昊', '柳神', '小塔', '小红', '毛球', '火灵儿']
    }
  },
  computed: {
    showPotatos() {
      return this.potatos.filter((potato) => potato.indexOf(this.keywords) !== -1)
    }
  },
  methods: {
    pushNumber() {
      return Math.max(...this.figures) + 1
    },
    randomIndex() {
      return Math.floor(Math.random() * this.figures.length)
    },
    addFigure() {
      this.figures.splice(this.randomIndex(), 0, this.pushNumber())
    },
    delFigure() {
      this.figures.splice(this.randomIndex(), 1)
    },
    shuffleFigures(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
      this.figures = array
    },
    beforeEnter(el, done) {
      gsap.from(el, {
        opacity: 0,
        height: 0,
        onComplete: done
      })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        delay: el.dataset.index * 0.1,
        opacity: 1,
        height: '1.5em',
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 1,
        delay: el.dataset.index * 0.1,
        opacity: 0,
        height: 0,
        onComplete: done
      })
    }
  }
}
</script>

<style scoped>
/* .shadow-enter-from,
.shadow-leave-to {
  opacity: 0;
  transform: scale(0);
}

.shadow-enter-active,
.shadow-leave-active {
  transition: all 1s;
}

.shadow-enter-to,
.shadow-leave-from {
  opacity: 1;
  transform: scale(1);
} */

/* .shadow-enter-active {
  animation: fade 1s ease-in;
}
.shadow-leave-active {
  animation: fade 1s ease-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    height: 0;
  }
  50% {
    opacity: 0.3;
    height: 0.5em;
  }
  100% {
    opacity: 1;
    height: 1.5em;
  }
} */

p span {
  display: inline-block;
}

.naive-enter-active {
  animation: fade2 1s ease-in;
}

.naive-leave-active {
  position: absolute;
  animation: fade2 1s ease-out reverse;
}

.naive-move {
  transition: all 1s ease;
}

@keyframes fade2 {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
  }
}
</style>
