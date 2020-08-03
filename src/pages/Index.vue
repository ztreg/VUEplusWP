<template>
<q-page>
  <div class="q-pa-md">
    <!-- Content 1 -->
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        navigation-position="top"
        padding
        arrows
        class="bg-primary text-white shadow-1 rounded-borders caru col-sm"
        infinite
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center" img-src="http://reso.nu/cache/lofthumbs/587x323-hummerkok.jpg">
          <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="absolute-bottom custom-caption">
            <div class="text-h4">Resö Kök</div>
            <div class="text-subtitle1">Besök Resö och Galtö</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center" img-src="http://reso.nu/cache/lofthumbs/587x323-hamnmagasinetbild1.jpg">
         <!-- <q-icon name="live_tv" size="56px" /> -->
          <div class="absolute-bottom custom-caption">
            <div class="text-h4">Resö Hamngatan</div>
            <div class="text-subtitle1">Resös Hamn!</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" SameSite="none" class="column no-wrap flex-center" img-src="http://reso.nu/cache/lofthumbs/587x323-sjostjarna%201%20sidan.jpg">
          <!-- <q-icon name="layers" size="56px" /> -->
            <div class="absolute-bottom custom-caption">
              <div class="text-h4">Entré Kosterhavets Nationalpark</div>
              <div class="text-subtitle1">Besök Resö och Galtö</div>
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
        </q-carousel-slide>
      </q-carousel>
    </div>
    <!-- Content 2 -->
    <div class="q-pa-md col-sm">
      <div class="text-h4">
      Välkommen till
      Härliga Resö!</div>
      <div>
        Här finner du en levande skärgård året runt.
        Resö erbjuder allt som hör till en magnifik miljö och upplevelser i
        Bohusläns havsband med Kosterhavets Nationalpark alldeles intill.
      </div>
      <div class="text-center">
        <q-btn color="red-6" class="btns glossy" to="/about">Läs mera...</q-btn>
        <q-btn color="grey-8" class="btns glossy" to="/contact">Kontakta oss</q-btn>
      </div>
  </div>
  <!-- Content 3 -->
  <div class="text-part q-pa-md">
    <div class="text-h4 glossy">Artiklar</div>
    <div class="articles q-pa-sm" v-for="(CurrentItem, i) in dataPosts" :key="i" >
      <div class="text-h4">{{CurrentItem.slug}}</div>
        {{CurrentItem.content.rendered}}
      <img :src=CurrentItem.ImgUrl >
      <div class="text-subtitle2"> Publicerad: {{CurrentItem.date}}</div>
    </div>
    <div class="q-pa-sm">
      "gästhamn?" + bild
    </div>
    <div>Det händer <a href="https://www.tanum.se/"><img src="http://reso.nu/images/banners/tanumskommun.jpg" /></a></div>
  </div>
  <div class="text-part">
  <a href="http://www.yr.no/sted/Sverige/V%C3%A4stra_G%C3%B6taland/Res%C3%B6/">  <img src="http://reso.nu/templates/reso/css/reso/weather.gif" /></a>
  </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 'style',
      dataPosts: []
    }
  },
  async mounted () {
    await fetch('http://reso.local/index.php/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(result => this.checkData(result))
  },
  methods: {
    async checkData (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].content.rendered.search('<img') === true) {
          const url = await fetch('http://reso.local/wp-json/wp/v2/media?parent=' + data[i].content.rendered.id).then(response => response.json())
          data[i].ImgUrl = url
        }
        else {
          data[i].content.rendered = data[i].content.rendered.replace('<p>', '')
          data[i].content.rendered = data[i].content.rendered.replace('</p>', '')
        }
      }
      this.dataPosts = data
    }
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 700px){
    .caru {
    margin: 0 auto;
    margin-top: 2%;
    width: 90%;
    max-height: 200px !important;
  }
}

@media screen and (min-width: 700px){
    .caru {
    margin: 0 auto;
    margin-top: 2%;
    width: 60%;
    max-height: 30% !important;
  }
}

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .6);
}

.text-part {
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.2em;
  padding: 10px;
}

.btns {
  margin: 10px
}
</style>
