<template>
  <q-card class="vertical-card" flat>
    <div class="verticalProductText">

    <q-card-section>
      <div class="text-h6 q-mb-md vertical-card-title">{{ productTitle }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none vertical-card-text text-body1 q-mb-lg">{{ productDescription }}</q-card-section>
    </div>
  
    <div class="testImg">
      <video class="gif1 inside" autoplay loop muted playsinline>
        <source  :src="productImage" type="video/mp4">
      </video>
      <img class="around gif1" :src="imageFrame" alt="">
    </div>
  </q-card>
</template>

<script>
export default {
  name: 'ProductCardVertical',
  props: {
    productImage: String,
    imageFrame: String,
    productTitle: String,
    productDescription: String
  }
}
</script>

<style lang="scss" scoped>
.vertical-card {
  background-color: transparent;
  width: 350px;
  margin-bottom: 100px;
}

.vertical-card-title {
  height: 65px;
}

.vertical-card-text {
  width: 350px;
  height: 175px;
}

.testImg {
  height: 650px;
  position: relative;

  transition: 100ms;
  transition-timing-function: ease-out;
  
  img, video {
    position: absolute;
    top: inherit;
    left: 0;
    width: 350px;
    height: auto;
  }
}

.testImg:hover, .verticalProductText:hover {
  transform: scale(1.05);
}

@media (hover: none) {
  .testImg:hover, .verticalProductText:hover {
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

@media screen and(max-width: 400px) {
  .vertical-card {
  width: 300px;
}

.vertical-card-text {
  width: 300px;
}

.testImg {
  img, video {
    width: 300px;
  }
}
}
</style>
