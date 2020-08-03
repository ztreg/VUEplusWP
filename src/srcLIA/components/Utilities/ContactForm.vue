<template>
  <div>
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md q-mb-xl" focus>
        <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
      <q-input
        filled
        v-model="Name"
        placeholder="Ex: Jonas Svensson *"
        :hint="$t('Utilities').Contactform.Name"
        lazy-rules
      />

      <q-input
        filled
        v-model="Mail"
        placeholder="Ex: example@example.com *"
        :hint="$t('Utilities').Contactform.Email"
        lazy-rules
      />

      <q-input
        filled
        type="number"
        v-model="PhoneNumber"
        :hint="$t('Utilities').Contactform.Phonenumber"
        placeholder="Ex: 070-000-0000"
      />

      <q-input
        v-model="Message"
        :placeholder="$t('Utilities').Contactform.Message"
        filled
        type="textarea"
      />

      <div>
        <q-btn :label="$t('Utilities').Contactform.Submit" type="submit" color="primary" />
        <q-btn
          :label="$t('Utilities').Contactform.Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
    scrollId: String,
    contactFormTitle: String
  },
  methods: {
    track () {
      this.$gtag.event('Sent from contact form', {
        'event_category': 'Contact form submission',
        'event_label': 'Submission',
        'value': '6'
      })
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async onSubmit(e) {
      this.track()
      let _this = this
      this.errors = [];

      if (!this.Name) {
        this.errors.push("Name required.");
      }
      if (!this.Mail) { 
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.Mail)) {
        this.errors.push('The email adress is not valid');
        return false;
      }

      const API_URL = `${process.env.API_URL}contactForm`
      const POST_DATA = {
        email: this.Mail,
        Name: this.Name,
        Phonenumber: this.PhoneNumber,
        Message: this.Message,
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
      })
    },
    onReset() {
      this.Name = null;
      this.Mail = null;
      this.PhoneNumber = null;
      this.Message = null;
    }
  },
  data() {
    return {
      Name: '',
      Mail: '',
      PhoneNumber: '',
      Message: '',
      errors: []
    };
  }
};
</script>
