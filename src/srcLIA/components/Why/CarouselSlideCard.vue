<template>
  <q-card flat bordered class="slides">
    <q-card-section horizontal class="slides-inner">
      <q-img
        class="col-5 carouselImg"
        :src="slideImg"
      />

      <q-card-section class="q-pt-xs">
        <div class="text-h3 q-mt-sm q-mb-xs">{{ slideTitle }}</div>
        <div class="text-body1 text-weight-medium">{{ slideCompany }}</div>
        <div class="text-h3 q-mt-sm q-mb-xs">{{ slideText }}</div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CarouselSlideCard',
  props: {
    slideImg: String,
    slideTitle: String,
    slideCompany: String,
    slideText: String
  }
};
</script>

<style lang="scss" scoped>
.carouselImg {
  height: 100%;
  overflow: hidden;
}

.slides, .slides-inner {
  height: 100%;
}

@media screen and (max-width: 500px){
  .carouselImg {
    display: none;
  }
  #customers {
    .text-h3 {
       font-size: 2em;
       text-align: center;
    }
   .text-body1 {
     text-align: center;
   }
  
  }
}
</style>
