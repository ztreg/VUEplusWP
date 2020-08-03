<template>
  <q-item-section class="q-pl-xl info">
    <div class="text-body1">{{ FooterAdress1 }}  </div>
    <div class="text-body1">{{ FooterZipNCity1 }} </div>
    <div class="text-body1">{{ FooterEmail }}</div>
    <div class="text-body1">{{ FooterNumber }}</div>
    <div class="text-body1">{{ FooterAdress2 }} </div>
    <div class="text-body1">{{ FooterZipNCity2 }} </div>
  </q-item-section>
</template>

<script>
export default {
name: 'FooterCol2',
props: {
  FooterAdress1: String,
  FooterZipNCity1: String,
  FooterEmail: String,
  FooterNumber: String,
  FooterAdress2: String,
  FooterZipNCity2: String,
}

}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px){
  .info {
    font-size: 1.3rem!important;
  }
}

</style>>

