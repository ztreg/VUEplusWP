<template>
  <q-layout view="lHh Lpr lFf" class="maxw">
    <q-header elevated sticky>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-space></q-space>
        <div>
          <q-btn clickable to="/" icon="home"> <img src="http://reso.nu/templates/reso/css/reso/logo.png" class="logo"/> </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-blue-1"
    >
      <q-list style="width: 100%;">
        <!--Loop through childmenus -->
        <q-list
          v-for="(CurrentItem, i) in navigationItems" :key="i"
           class="bg-blue-1"
           separator
           >
           <q-item
            class="text-left mobileButtonCy"
            color="grey-4"
            clickable
            v-ripple
            :to="CurrentItem.to"
            @click="closeBurger()"
            >
            <q-avatar :icon="CurrentItem.icon">
            </q-avatar>
             <q-item-section>
              {{ CurrentItem.title }}
            </q-item-section>
           </q-item>
        </q-list>
        <q-separator />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="absolute-bottom">
        <q-toolbar class="glossy bg-purple-10" id="footer">
          <div class="q-pa-sm">© Samhällsföreningen Resö Galtö ekonomisk förening. Webdesign JWD.se</div>
          <q-avatar icon="email">  </q-avatar>
          <q-avatar icon="phone">  </q-avatar>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  data () {
    return {
      leftDrawerOpen: false,
      navigationItems: [
        {
          title: 'Home',
          icon: 'house',
          to: '/'
        },
        {
          title: 'SPACEY',
          icon: 'school',
          to: '/spacey'
        },
        {
          title: 'About',
          icon: 'info',
          to: '/about'
        },
        {
          title: 'Contact',
          icon: 'contact_support',
          to: '/contact'
        }
      ]
    }
  },
  watch: {
    leftDrawerOpen: (bool) => {
      console.log(bool)
    }
  },
  methods: {
    closeBurger () {
      if (this.leftDrawerOpen === true) {
        this.leftDrawerOpen = !this.leftDrawerOpen
      }
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 40px;
  border: none;
}

.maxw {
}
</style>
