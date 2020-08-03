<template>
  <div class="row justify-center">
    <div class="col-md footerCol self-center text-center">
      <FooterCol1
        :FooterImage="$t('Footer').FooterArea.FooterCol1.Img.src"
        
      />
    </div>
    <div class="col-md-3 borderleft q-ma-sm q-pt-lg footerCol">
      <FooterCol2
        :FooterAdress1="$t('Footer').FooterArea.FooterCol2.footerAdress1"
        :FooterZipNCity1="$t('Footer').FooterArea.FooterCol2.footerZipNCity1"
        :FooterEmail="$t('Footer').FooterArea.FooterCol2.footerEmail"
        :FooterNumber="$t('Footer').FooterArea.FooterCol2.footerNumber"
        :FooterAdress2="$t('Footer').FooterArea.FooterCol2.footerAdress2"
        :FooterZipNCity2="$t('Footer').FooterArea.FooterCol2.footerZipNCity2"
      />
    </div>
    <div class="col-md q-ma-sm borderleft">
      <FooterCol3 
        :FooterIcon1="$t('Footer').FooterArea.FooterCol3.footerIcon1"
        :FooterIcon2="$t('Footer').FooterArea.FooterCol3.footerIcon2"
        :FooterIcon3="$t('Footer').FooterArea.FooterCol3.footerIcon3"
      />
    </div>
  </div>
</template>

<script>
import FooterCol1 from "./FooterCols/FooterCol1";
import FooterCol2 from "./FooterCols/FooterCol2";
import FooterCol3 from "./FooterCols/FooterCol3";
export default {
  name: 'FooterArea',
  components: {
    FooterCol1,
    FooterCol2,
    FooterCol3
  },
  data() {
      return {}
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding-bottom: 0;
}

#testzz {
  color: #ffffff;
}

@media screen and (min-width: 1100px) {
  .borderleft {
    border-left: 1px solid $webotWhite;
    height: 200px;
  }
}


</style>