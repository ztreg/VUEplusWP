<template>
  <div :id="scrollId" >
    <div v-for="(Card, Index) in $t('Pages').WhyPage.Why.WhyCards" :key="Index">
      <WhyCardTextRight v-if="Index % 2 == 0"
        :whyBgClass="Card.whyBgClass"
        :whyImage="Card.whyImage"
        :whyTitle="Card.whyTitle"
        :whyDescription="Card.whyDescription"
      />

      <WhyCardTextLeft v-else
        :whyBgClass="Card.whyBgClass"
        :whyImage="Card.whyImage"
        :whyTitle="Card.whyTitle"
        :whyDescription="Card.whyDescription"
      />
    </div>
  </div>
</template>

<script>
import WhyCardTextRight from './WhyCardTextRight'
import WhyCardTextLeft from './WhyCardTextLeft'

export default {
  name: 'WhySection',
  props: {
    scrollId: String
  },
  components: {
    WhyCardTextRight,
    WhyCardTextLeft
  }
};
</script>

<style lang="scss" scoped>
.darkbg {
  background-color: #7085BA;
}

.lightbg {
  background-color: #F9F9F7;
}
</style>
