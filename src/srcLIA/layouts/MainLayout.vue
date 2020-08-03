<template>
  <q-layout q-layout view="hHh Lpr lff">
    <div>
      <HeaderMobile />
      <HeaderDesktop />
      <div id="desktop-space">
      <q-page-container >
        <!-- This is where pages get injected -->
        <router-view :key="$route.params.id" />
        
      </q-page-container>
      </div>
    </div>
    <Footer />
  </q-layout>
</template>

<script>
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'

import Footer from './Footer'

import { scroll } from 'quasar'
const { getScrollPosition, setScrollPosition, getScrollTarget } = scroll

export default {
  name: "MainLayout",
  components: {
    Footer,
    HeaderMobile,
    HeaderDesktop
  },
  methods: {
    scrollToElement (el) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      const duration = 1000
      setScrollPosition(target, offset, duration)
    },
    startScroll () {
      if (null !== document.getElementById(this.$route.params.id)) {
      this.scrollToElement(document.getElementById(this.$route.params.id))
      }
    },
    handleScroll () {
      if (0 === window.scrollY) {
        document.getElementById('fixed-nav').classList.add('nav-opacity')
      } else {
        document.getElementById('fixed-nav').classList.remove('nav-opacity')
      }
    }
  },
  //First time loading dom
  mounted() {
    this.handleScroll()
    this.startScroll()
    this.$root.$on('samePageClick', () => {
      this.startScroll()
    })
  },
  //Every time the dom is updated
  updated() {
    this.handleScroll()
    this.startScroll()
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>

</style>
