<template>
<div>
  <picture>
    <source srcset="statics/webp/logo-white-footer.webp" type="image/webp">
    <img class="text-center q-mb-md" id="webot-logo-footer" src="statics/png/logo-white-footer.png" alt="Logo">
  </picture>
  <!--
  <img class="text-center q-mb-md" id="webot-logo-footer"
    :src="FooterImage"
  />-->
  </div>
</template>

<script>
export default {
  name: 'FooterCol1',
  props: {
    FooterImage: String,
    
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
  #webot-logo-footer {
    width: 260px;
    height: auto;
  }

</style>>

