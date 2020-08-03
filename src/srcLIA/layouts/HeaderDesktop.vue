<template>
  <div id="fixed-nav">
    <q-toolbar class="q-pa-lg centerContent">
      <LogoButton />

      <q-space />

      <q-tabs shrink>
        <MenuDropdown
          :label="$t('NavBar').Desktop.Dropdown1.label"
          :labelPath="$t('NavBar').Desktop.Dropdown1.labelPath"
          :menuItems="$t('NavBar').Desktop.Dropdown1.menuItems"
        />

        <MenuDropdown
          :label="$t('NavBar').Desktop.Dropdown2.label"
          :labelPath="$t('NavBar').Desktop.Dropdown2.labelPath"
          :menuItems="$t('NavBar').Desktop.Dropdown2.menuItems"
        />

        <MenuDropdown
          :label="$t('NavBar').Desktop.Dropdown3.label"
          :labelPath="$t('NavBar').Desktop.Dropdown3.labelPath"
          :menuItems="$t('NavBar').Desktop.Dropdown3.menuItems"
        />

        <q-btn
          :to="$t('NavBar').Desktop.Button.labelPath"
          id="desktopNavButton"
          name="tab2"
          replace
          :label="$t('NavBar').Desktop.Button.label"
          no-caps
          flat
          :ripple="false"
        />

        <EmailForm
          formName="HeaderEmail"
        />

        <q-btn
          aria-label="language switcher"
          flat
          :outline="false"
          :ripple="false"
          rounded
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
      </q-tabs>
    </q-toolbar>
  </div>
</template>

<script>
import { debounce } from "quasar";

import LogoButton from "../components/HeaderDesktop/LogoButton";
import MenuDropdown from "../components/HeaderDesktop/MenuDropdown";
import EmailForm from "../components/Utilities/EmailForm";

export default {
  name: "HeaderDesktop",
  components: {
    LogoButton,
    MenuDropdown,
    EmailForm
  },
  data() {
    return {
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
  methods: {
    countryCheck(lang, icon, sendEmit = false) {
      this.icon = icon;
      this.lang = lang;
      this.$i18n.locale = lang
      this.$q.localStorage.set('langOption', lang)
      if(sendEmit) {
        this.$root.$emit('LanguageSwitchMobile', {
          icon : this.icon,
          lang : this.lang
        })
      }
    }
  },
  created() {
    //console.log(this.$root.$on('HeaderDesktop'))
    this.$root.$on('LanguageSwitchDesktop', (object) => {
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
 

  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1150px) {
  .emailForm {
    display: none;
  }
}
</style>
