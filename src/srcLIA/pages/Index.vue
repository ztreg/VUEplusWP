<template>
  <q-page>
    <WavyHero
      :heroImgUrl="$t('Pages').IndexPage.Hero.BgImg.src"
      :heroText="$t('Pages').IndexPage.Hero.text"
      :emailForm="$t('Pages').IndexPage.Hero.emailForm"
      :heroHeader="$t('Pages').IndexPage.Hero.title"
      :insideHeroImgUrl="$t('Pages').IndexPage.Hero.HeroGif.src"
      :insideHeroImgFrame="$t('Pages').IndexPage.Hero.GifFrame.src"
    />

    <!--First content -->
    <div class="bgFirstSection">
      <!--
      <div style="height: 100px; overflow: hidden;">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
          class="bgWhite"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none;"
            class="bgFirstSection"
          ></path>
        </svg>
      </div>-->
      <!--This is hidden (show=false)-->
      <div class="centerContent ">
        <IndexSection
          :indexSectionTitle="$t('Pages').IndexPage.PlatformAgnostic.title"
          :indexSectionText="$t('Pages').IndexPage.PlatformAgnostic.text"
          :indexSectionImage="$t('Pages').IndexPage.PlatformAgnostic.Img.src"
          :indexSectionImageAlt="$t('Pages').IndexPage.PlatformAgnostic.Img.alt"
        />
      </div>
    </div>
   <!--
    <div class="bgWhite">
      <div style="height: 100px; overflow: hidden;">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
          class="bgFirstSection"
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z"
            style="stroke: none;"
            class="bgWhite"
          ></path>
        </svg>
      </div>
    </div>
    -->
    <div class="centerContent">
      <IndexShortCards :CardArray="$t('Pages').IndexPage.TripleCard" />
    </div>
    <!--Second content , different style -->
    <div class="centerContent">
      <IndexReferences
        :indexSection2Title="$t('Pages').IndexPage.References.title"
        :IndexReferencesArray="$t('Pages').IndexPage.References.refArr"
        :show="$t('Pages').IndexPage.References.show"
      />
    </div>
  </q-page>
</template>

<script>
import WavyHero from "../components/WavyHero";
import IndexSection from "../components/Index/IndexSection";
import IndexReferences from "../components/Index/IndexReferences";
import IndexShortCards from "../components/Index/IndexShortCards";
export default {
  name: "PageIndex",
  components: {
    IndexSection,
    WavyHero,
    IndexReferences,
    IndexShortCards
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.bgFirstSection {
  background-image: linear-gradient(to bottom, rgb(40, 131, 165) ,rgb(40, 99, 121));
  fill: rgb(40, 99, 121);
}
</style>
