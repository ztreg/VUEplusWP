<template>
  <div class="row q-pb-xl profiles" :id="scrollId">
    <div class="col-md self-center">
      <div class="text-h4 q-ma-lg">
        {{ aboutSection1Title }}
      </div>
      <div class="text-body1 q-ma-lg self-center text-weight-medium">
        {{ aboutSection1Text }} 
      </div>
    </div>
    <div class="col-md self-center desktopPhotos" id="logoAbout">
      <img
        :src="aboutSection1Img"
        :alt="aboutSection1ImgAlt"
      />
    </div>
  </div>
</template>

<script>
export default {
   name: 'AboutWeBot',
    props: {
    scrollId: String,
    aboutSection1Title: String,
    aboutSection1Text: String,
    aboutSection1Img: String,
    aboutSection1ImgAlt: String 
  },
  data() {
    return {

    };
  }
};
</script>
