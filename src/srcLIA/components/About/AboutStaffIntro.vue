<template>
     <div class="row q-pt-lg q-pt-xl q-pb-xl profiles" :id="scrollId">
   
      <div class="col-6 self-center desktopPhotos q-ma-lg">
          <img :src="aboutSection2Img" :alt="aboutSection2Alt">
      </div>
         <div class="col-md self-center text-white" >
        <div class="text-h4 q-ma-lg ">
          {{ aboutSection2Title }}
        </div>
        <div class="text-body1 q-ma-lg text-weight-medium">
          {{ aboutSection2Text }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
   name: 'AboutStaffIntro',
    props: {
      scrollId: String,
      aboutSection2Title: String,
      aboutSection2Text: String,
      aboutSection2Img: String,
      aboutSection2Alt: String
  },
  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
.desktopPhotos {
  img {
    border-radius: 20px;
    width: 100%;
    height: 100%;
  }
}


@media screen and (max-width: 500px){
  .desktopPhotos {
    display: none;
  }
}
@media screen and (max-width: 1000px){
  .desktopPhotos {
    margin: 0 auto;
  }
}
</style>