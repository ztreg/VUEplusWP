<template>
  <form class="emailtesting emailForm" @submit.prevent="onSubmit">
    <input
      aria-label="email input"
      v-model="Email"
      type="email"
      :placeholder="$t('Utilities').Emailform.Emailtext"
      required
    >
    <button>{{ $t("Utilities").Emailform.EmailButton }}</button>
  </form>
</template>

<script>
export default {
  name: 'EmailForm',
  props: {
    formName: String
  },
  data() {
    return {
      model: null,
      tab: '',
      Email: ''
    }
  },
  methods: {
    track () {
      this.$gtag.event(`Sent from ${this.formName}`, {
        'event_category': 'Email form submission',
        'event_label': 'Submission',
        'value': '6'
      })
    },
    async onSubmit(e) {
      let _this = this  
      _this.track()
      const API_URL = `${process.env.API_URL}emailForm`
      const POST_DATA = {
        email: this.Email
      }
      const POST_CONFIG = {
        headers: {
          'x-api-key': process.env.WEBOT_API_KEY,
        }
      }

      await this.$axios.post(API_URL, POST_DATA, POST_CONFIG)
      .then(function (response) {
        _this.$q.notify({
          color: 'green',
          textColor: 'white',
          icon: 'mail',
          message: 'Your email has been sent, we will get back to you shortly!',
          actions: [
            { icon: 'close', color: 'white', handler: () => { /* ... */ } }
          ]
        })
        _this.Email = ''
      })
      .catch(function (error) {
        console.log(error)
        _this.$q.notify({
          color: 'red-9',
          textColor: 'white',
          icon: 'warning',
          message: 'There was en error sending your email, please try again later',
          actions: [
            { icon: 'close', color: 'white', handler: () => { /* ... */ } }
          ]
        })
      _this.Email = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.emailForm {
  display: inline-block;
  //border: 3px solid #E91E63;
  //border-radius: 10px;
  overflow: hidden;
  width: 75.8mm;

  input {
    border: 3px solid #e01d60;
    border-radius: 25px 0 0 25px;
    background-color: #F9F9F7;
    padding: 10px;
    outline: none;
    width: 60%;
  }

  button {
    border: 3px solid #e01d60;
    border-radius: 0 25px 25px 0;
    //background: none;
    background-color: #e01d60;
    color: white;
    font-weight: bold;
    padding: 10px;
    outline: none;
    width: 40%;
    white-space: nowrap;
  }
}
</style>
