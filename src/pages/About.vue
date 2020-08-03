<template>
<q-page class="q-pa-sm">
  <div class="text-part">
   <div class="text-h4">Om Resö och Galtö</div>
   <img src="http://reso.nu/cache/articleimageresizer/images_bilder_hamnmagasinveranda.618x230.1515759844.jpg" class="col-md about-img" />
    Här är det gott att leva och bo
    Resö och Galtö ligger i Tanums kommun norra skärgård. Till dessa vackra öar tar man sig landvägen via broar eller med båt. Naturen erbjuder fina upplevelser och en rik fauna. Här är det en mycket god livskvalitet året runt.
    <div class="q-pt-lg">
    I Resö hamn finns fiske inriktat på skaldjur. Tempo har generösa öppettider, sortiment och service. På öarna finns dels äldre bostadsbebyggelse och sjöbodar, dels yngre helårshus och fritidsbebyggelse. Helårsboende och företag arbetar aktivt med områdesfrågor och har lyckats behålla ett i högsta grad levande samhälle. På Resö finns ett föräldrakooperativ för skola, fritids och dagis, Sjöstjärneskolan.
    </div>
    <div class="q-pt-lg">
    I hamnen finns Resö Hamnmagasin som är en träffpunkt och inrymmer lokaler för fest och restaurang. Gästhamnen är mycket omtycket för sitt läge och här finns fullt utbyggd serviceanläggning. Information om att besöka området se Turistinformation.
    </div>
    <div class="about-images" v-for="(CurrentItem, i) in aboutImageAlbum" :key="i">
      <q-item
        color="grey-4"
        clickable
        v-ripple
        class="justify-center"
        >
        <img src="https://via.placeholder.com/300" alt="">
      </q-item>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      aboutImageAlbum: [
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        },
        {
          icon: 'photo'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about-img{
  width: 100%;
  height: 35vh;
}

.about-album {
  width: 300px !important;
  height: 300px;
}
</style>
