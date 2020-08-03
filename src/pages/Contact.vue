<template>
  <div class="row">
    <div class="col-sm text-body1">
      <div class="text-h4 text-center">Välkommen att kontakta oss</div>
      <div class="q-pa-sm">
        Samhällsföreningen Resö-Galtö Ekonomisk förening
       <a href="#">Länk till styrelsen</a>
      </div>
      <div class="q-pa-sm">
        Resö Hamnmagasin
        Telefon : <a href="tel:+ 0525 - 254 55"> 0525 - 254 55</a>
        E-post <a href="mailto:kontakt@reso.se">kontakt@reso.se</a>
      </div>
      <div class="q-pa-sm">
        Resö Gästhamn
        Telefon <a href="tel:+072-7078554">072-7078554</a>
      </div>
      <div class="q-pa-sm">
        Webmaster för  www.reso.se:
        <a href="mailto:kontakt@reso.se">kontakt@reso.se</a>
      </div>
    </div>
    <div class="text-part col-md q-ma-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16532.429160877356!2d11.172396070095113!3d58.804700856648125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464437632a17d111%3A0xa01907aa34092f0!2s457%2097%20Res%C3%B6!5e0!3m2!1ssv!2sse!4v1594301834371!5m2!1ssv!2sse" class="map" frameborder="2" style="border:0;" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 600px;
  height: 400px;
}

@media screen and (max-width: 600px){
  .map {
  width: 100% !important;
  height: 350px;
}
}
</style>
