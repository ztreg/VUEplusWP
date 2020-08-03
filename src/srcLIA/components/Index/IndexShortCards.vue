<template>
<div class="row q-mt-lg q-mb-xl sectionHeight">
  <div class="cards self-center text-center" :class="CurrentCard.CardBgColor" v-for="(CurrentCard, Index) in CardArray" :key="Index">
    <q-avatar
      text-color="blue-4"
      :icon="CurrentCard.CardIcon"
      size="200px"
    />
    <div class="text-h4 q-pb-lg" :style="`color: ${CurrentCard.CardTextColor}`">{{ CurrentCard.CardHeadline }} </div> 
    <div class="text-body1" :style="`color: ${CurrentCard.CardTextColor}`"> {{ CurrentCard.CardText }} </div> 
  </div>  
</div>
</template>

<script>

export default {
    name: 'IndexShortCards',
    props: {
        CardArray: Array
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
.sectionHeight {
  min-height: 700px;
}
.cards { 
    width: 33.33%;
    padding: 40px 50px;
    height: 450px;
}
.text-h4 {
  word-wrap: break-word;
}

@media screen and (max-width: 800px){
  .cards {
    width: 100%;
    margin: 0 auto;
  }
    .text-h4 {
    font-size: 1.8em;
  }
}
</style>

