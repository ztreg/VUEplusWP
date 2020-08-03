<template>
  <div>
    <q-item class="justify-center q-ma-sm q-mt-md">
      <EmailForm
        formName="FooterEmail"
      />
    </q-item>
    <q-item class="justify-center" >
      
      <q-item-section avatar >
        <q-btn
          v-ripple
          flat
          :icon="FooterIcon1"
          size="20px"
          round
          type="a"
          href="https://www.linkedin.com/company/we-bot/"
          @click="track('Linkedin')"
          target="_blank"
          rel="noopener"
          aria-label="link to we bot linkedin page"
        />
      </q-item-section>
      <q-item-section avatar>
        <q-btn
          v-ripple
          flat
          :icon="FooterIcon2"
          size="20px"
          round
          type="a"
          href="tel:+46704134744"
          @click="track('Phone')"
          aria-label="link to we bot phonenumber"
        />
      </q-item-section>
      <q-item-section avatar>
        <q-btn
          :icon="FooterIcon3"
          v-ripple
          flat
          size="20px"
          round
          type="a"
          href="mailto:hello@webot.se"
          @click="track('Mail')"
          target="_blank"
          rel="noopener"
          aria-label="link to we bot email"
        />
      </q-item-section>
     
    </q-item>
    <q-item class="justify-center" >
      <a @click="$router.push({ path: '/privacy-policy' })">
        <p class="text-body1 privacyLink">{{ $t('Footer').FooterArea.FooterCol3.footerPp }}</p>
      </a>
    </q-item>
  </div>
</template>

<script>
import EmailForm from '../../Utilities/EmailForm'
export default {
  name: "FooterCol3",
  components: {
    EmailForm
  },
  props: {
    FooterIcon1: String,
    FooterIcon2: String,
    FooterIcon3: String,
    FooterBtn: String
  },
  methods: {
    track (Link) {
      this.$gtag.event(`Click to ${Link}`, {
        'event_category': 'Footer Buttons',
        'event_label': 'FooterClick',
        'value': '6'
      })
    },
  },
   data(){
    return{
      model: null,
      tab: '',
      email: '',
      dense: false
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 500px) {
  .emailForm {
    width: 100%;
  }
}

.q-item {
  padding: 5px 10px;  
}

.privacyLink {
  cursor: pointer;
  text-decoration: underline;
}
</style>
