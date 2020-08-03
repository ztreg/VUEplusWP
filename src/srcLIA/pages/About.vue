<template>
 
    <q-page>
      <WavyHero
        :heroImgUrl="$t('Pages').AboutPage.Hero.BgImg.src"
        :heroHeader="$t('Pages').AboutPage.Hero.title"
        :heroText="$t('Pages').AboutPage.Hero.text"
      />
      <!--About We Bot -->
      <div class="">
        <div class="centerContent">
          <AboutWeBot 
            :scrollId="$t('Pages').AboutPage.Company.scrollId"
            :aboutSection1Title="$t('Pages').AboutPage.Company.title"
            :aboutSection1Text="$t('Pages').AboutPage.Company.text"
            :aboutSection1Img="$t('Pages').AboutPage.Company.Img.src"
            :aboutSection1Alt="$t('Pages').AboutPage.Company.Img.alt"
          />

        </div>
      </div>
      <!-- Vi på webot intro-->
      <div class="">
          <div style="height: 100px; overflow: hidden;">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="bgWhite">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;" class="blue-bg" ></path>
          </svg>
        </div>
        <div class="blue-bg">
          <div class="centerContent">
            <AboutStaffIntro
              :scrollId="$t('Pages').AboutPage.Staff.scrollId"
              :aboutSection2Title="$t('Pages').AboutPage.Staff.title"
              :aboutSection2Text="$t('Pages').AboutPage.Staff.text"
              :aboutSection2Img="$t('Pages').AboutPage.Staff.Img.src"
              :aboutSection2Alt="$t('Pages').AboutPage.Staff.Img.alt"  
            />
          </div>
        </div>
      </div>

      <!-- Vi på webot medlemmar-->
      <!-- Redigera medlemmar på aboutstaff.vue -->
      <AboutStaff />
      
      <!-- Kontaktforumlär-->
       
        <div class="centerContent" >
            <AboutContactUs 
              :scrollId="$t('Pages').AboutPage.Contact.scrollId"
              :contactFormTitle="$t('Pages').AboutPage.Contact.title"
            />
        </div>
    </q-page>
  
</template>

<script>
import WavyHero from '../components/WavyHero'
import AboutWeBot from '../components/About/AboutWeBot'
import AboutStaffIntro from '../components/About/AboutStaffIntro'
import AboutStaff from '../components/About/AboutStaff'
import AboutContactUs from '../components/About/AboutContactUs'

export default {
  name: "About",
   components: {
    AboutWeBot,
    AboutStaffIntro,
    AboutStaff,
    AboutContactUs,
    WavyHero
  },
  data() {
    return {
      tab: '',
      dense: false

    };
  }, 

}
</script>

<style lang="scss" scoped>

</style>