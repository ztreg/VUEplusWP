  <template>
  <div :id="scrollId" class="q-pb-xl row justify-center">
     <div class="col-md-7 form">
      <div class="text-h4 text-center q-ma-xl">
      {{ contactFormTitle }}
      </div>
  
      <ContactForm />
     </div>
  </div>
</template>

<script>
import ContactForm from '../Utilities/ContactForm';
export default {
  name: 'AboutContactUs',
  components: {
    ContactForm
  },
  props: {
    scrollId: String,
    contactFormTitle: String
  }
}
</script>

<style lang="scss" scoped>
.bgForm {
  z-index: -10;
}


@media screen and (max-width: 500px) {
  .form {
    min-width: 80%;
  }
}

@media screen and (max-width: 900px) {
  .form {
    min-width: 80%;
  }
}

@media screen and (max-width: 1100px) {
  .form {
    min-width: 80%;
  }
}</style>>

