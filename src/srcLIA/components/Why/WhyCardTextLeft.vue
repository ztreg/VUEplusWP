<template>
  <div :class="`${whyBgClass}`" :id="scrollId">
    <div class="centerContent">
      <q-card class="how" flat>
        <div class="howText text-white">
          <div class="text-h4 q-mb-lg">{{ whyTitle }}</div>
          <div class="text-body1 text-weight-medium">{{ whyDescription }}</div>
        </div>
        <div class="howImg">
          <object :data="whyImage" type="image/svg+xml"></object>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyCardTextLeft',
  props: {
    scrollId: String,
    whyImage: String,
    whyTitle: String,
    whyDescription: String,
    whyBgClass: String
  }
}
</script>

<style lang="scss" scoped>
.how {
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;

  .howImg {
    order: 2;
  }

  .howText {
    width: 300px;
    order: 1;
 
  }
}

.placeholderImage {
  height: 300px;
  width: 300px;
}

@media screen and(max-width: 350px){
  .how {
    width: 100%;
  }

  .placeholderImage {
    height: 250px;
    width: 250px;
  }

  .howText {
    width: 250px;
  }
}

@media screen and(max-width: 700px){
  .how {
    display: flex;
    flex-direction: column;
    

    .howImg {
      order: 2;
      align-self: center;
    }

    .howText {
      order: 1;
      align-self: center;
      margin-bottom: 50px;
    }
  }
  .text-h4 {
    font-size: 1.9em;
  }
  
}
</style>
