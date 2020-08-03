<template>
  <div id="hamburger" container style="height: 300px" >
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-btn :to="'/'" id="webot-logo-button" flat @click="logoSwitch">

          <picture>
            <source srcset="statics/webp/logo-mobile.webp" type="image/webp">
            <img id="webot-logoMobileHeader" src="statics/png/logo-mobile.png" alt="Logo">
          </picture>
          <!--
          <img
            id="webot-logo"
            :src="$t('NavBar').Mobile.Logo.Img.src"
          />-->
        </q-btn>
        <q-space></q-space>
        <q-btn
          flat
          @click="hamburgerSwitch"
          round
          dense
          :icon="menuIcon"
          color="black"
          id="hamburgerButton"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
   
      side="right"
      v-model="drawer"
      :width="200"
      behavior="mobile"
      overlay
      bordered
      focus
      content-class="bg-grey-1"
      
    >
      <q-scroll-area class="fit">
        <q-list  v-for="(menuItem, index) in menuList" :key="index">
          <q-item-section  v-if="menuItem.ChildMenus !== undefined">
            <q-btn-dropdown 
              :id="'hamBtn' + menuItem.name"
              color="grey-7"
              :label="menuItem.label"
              style="width: 100%; height: 50px;"
              align="between"
            >
              <q-list style="width: 100%;">
                <!--Loop through childmenus -->
                <q-list
                  v-for="(CurrentItem, i) in menuItem.ChildMenus" :key="i"
                   class="bg-grey-1"
                   separator
                   >

                  <q-item
                    v-if="!CurrentItem.hide"
                    class="text-left mobileButtonCy"
                    color="grey-4"
                    clickable
                    :active="CurrentItem.label === 'Outbox'"
                    v-ripple
                    :to="CurrentItem.name"
                  >
                    <q-item-section>
                      {{ CurrentItem.label }}
                    </q-item-section>

                  </q-item>
                 
                </q-list>

                <q-separator />
              </q-list>
             
            </q-btn-dropdown>
          
          </q-item-section>
          <q-item-section v-else>
            <q-btn
              :id="'hamBtn' + menuItem.name"
              color="grey-7"
              :label="menuItem.label"
              style="width: 100%; height: 50px;"
              align="left"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              :to="menuItem.labelPath"
            >

            </q-btn>
          </q-item-section>
          <q-separator v-if="menuItem.separator" />
        </q-list>
        <q-btn
          class="bg-grey-7"
          style="width: 100%; height: 50px;"
          align="between"
          aria-label="language switcher"
          flat
          :outline="false"
          :ripple="false"
          >
          <q-item-section avatar>
            <q-img :src="icon" /> 
          </q-item-section>
          <q-menu
            :options="langOptions"
          >
            <q-list v-for="(Language, Index) in langOptions" :key="Index" v-close-popup>
              <q-item
                clickable
                @click="countryCheck(Language.value, Language.icon, true)"
              >
                <q-item-section avatar >
                  <q-img
                    clickable
                    v-ripple
                    :src="Language.icon"
                  />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
//const menuList = $t('NavBar').Mobile.MenuList;

export default {
  name: 'HeaderMobile',
  data() {
    return {
      menuIcon: 'menu',
      drawer: false,
      menuList: this.$t('NavBar').Mobile.MenuList,
      model: null,
      dense: false,
      lang: this.$i18n.locale,
      langOptions: [
        {
          value: "en-us",
          icon: "statics/icons/usa-flag.png"
        },
        {
          value: "sv-se",
          icon: "statics/icons/sweden-flag.png"
        }
      ],
      icon: "statics/icons/usa-flag.png"
    };
  },
  created() {
    this.$root.$on('LanguageSwitchMobile', (object) => {
      this.countryCheck(object.lang, object.icon)
    })

    let LSValue = this.$q.localStorage.getItem('langOption')

    if (null !== LSValue) {
      this.$i18n.locale = LSValue

      if('sv-se' === LSValue) {
        this.icon = 'statics/icons/sweden-flag.png'
      }
    } else {
      const browserLanguage = this.$q.lang.getLocale()
    
      if(browserLanguage === 'sv' || browserLanguage === 'sv-se') {
        const userLang = 'sv-se'
        this.$i18n.locale = userLang
        this.icon = 'statics/icons/sweden-flag.png'
      }
    }
    this.menuList = this.$t('NavBar').Mobile.MenuList
  },
  methods: {
    hamburgerSwitch() {
      this.drawer = !this.drawer;
    },
    logoSwitch() {
      if (this.drawer) {
        this.drawer = false;
      }
    },
    countryCheck(lang, icon, sendEmit = false) {
      this.icon = icon;
      this.lang = lang;
      this.$i18n.locale = lang
      this.$q.localStorage.set('langOption', lang)
      this.menuList = this.$t('NavBar').Mobile.MenuList
      if(sendEmit) {
        this.$root.$emit('LanguageSwitchDesktop', {
          icon : this.icon,
          lang : this.lang
        })
      }

      //this.$refs.HM.countryCheck(this.icon, this.lang);
    }
  },
  watch: {
    drawer: function(val) {
      this.menuIcon = !this.drawer ? "menu" : "close";
    }
  }
};
</script>

<style lang="scss">
#webot-logoMobileHeader {
  width: 230px;
  height: 58px;
}

#hamburger {
  aside {
    margin-top: 74px;
  }
}
</style>