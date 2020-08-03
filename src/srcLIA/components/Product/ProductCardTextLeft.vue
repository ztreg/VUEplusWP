<template>
  <q-card :id="scrollId" class="productCard" flat>
    <div class="productText">
      <div class="text-h4 q-mt-sm q-mb-lg">{{ productTitle }}</div>
      <div class="text-body1 text-weight-medium">{{ productDescription }}</div>      
    </div>

    <div class="productImg" v-if="!imageFrame">
       <div class="testImg ">
        <video class="gif1 imgCrop" autoplay loop muted playsinline>
          <source :src="productImage" type="video/mp4">
        </video>
      </div>
    </div>

    <div class="testImg" v-else>
      <video class="gif1 inside" autoplay loop muted playsinline>
        <source :src="productImage" type="video/mp4">
      </video>
      <img class="around gif1" src="statics/clips/around.png" alt="">
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'ProductCardTextRight',
  props: {
    scrollId: String,
    productImage: String,
    imageFrame: {
      type: Boolean,
      default: false
    },
    productTitle: String,
    productDescription: String
  }
}
</script>

<style lang="scss" scoped>
.productImg, .testImg {
  order: 2;
}

.productText {
  order: 1;
}

.imgCrop {
  clip: rect(0px,1000px,690px,0px);
}

@media screen and(max-width: 750px){
  .productImg, .testImg {
    order: 2;
  }

  .productText {
    order: 1;

    transition: 100ms;
    transition-timing-function: ease-out;
  }
}

.testImg {
  height: 700px;
  width: 350px;
  position: relative;

  transition: 100ms;
  transition-timing-function: ease-out;
  
  img, video {
    position: absolute;
    top: inherit;
    left: 0;
    height: 700px;
    width: 350px;
  }
}

.testImg:hover, .productText:hover {
  transform: scale(1.05);
}

@media (hover: none) {
  .testImg:hover, .productText:hover {
    transform: none;
  }
}

.inside {
  z-index: 1;
  border-radius: 10%;
  padding: 21px;
}

.around {
  z-index: 3;
}

@media screen and(max-width: 400px){
  .text-h4 {
    font-size: 2em;
  }
  .testImg {
    height: 600px;
    width: 300px;

    .imgCrop {
      clip: rect(0px,1000px,590px,0px);
    }

    img, video {
      height: 600px;
      width: 300px;
    }
  }
}
</style>
