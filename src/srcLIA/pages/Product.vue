<template>
  <q-page id="prodPage">
    <WavyHero
      :heroImgUrl="$t('Pages').ProductPage.Hero.BgImg.src"
      :heroHeader="$t('Pages').ProductPage.Hero.title"
      :heroText="$t('Pages').ProductPage.Hero.text"
    />

    <div
      v-for="(section, sectionIndex) in $t('Pages').ProductPage.Sections"
      :key="sectionIndex"
    >
      <div
        class="sections"
        v-bind:class="{ 'blue-bg text-white': sectionIndex % 2 !== 0 }"
        :id="section.scrollId"
      >
        <div class="centerContent">
          <div
            v-for="(card, cardIndex) in section.ProductCards"
            :key="cardIndex"
          >
            <ProductCardTextRight
              v-if="cardIndex % 2 === 0"
              :scrollId="card.scrollId"
              :productImage="card.Img.src"
              :productTitle="card.title"
              :productDescription="card.text"
              :imageFrame="card.ImgFrame"
            />

            <ProductCardTextLeft
              v-else
              :scrollId="card.scrollId"
              :productImage="card.Img.src"
              :productTitle="card.title"
              :productDescription="card.text"
              :imageFrame="card.ImgFrame"
            />
          </div>
        </div>
      </div>
      <div
        style="height: 200px; overflow: hidden;"
        v-if="sectionIndex % 2 == 0"
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
          class="blue-bg"
        >
          <path
            d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none;"
            class="white-bg"
          ></path>
        </svg>
      </div>
      <div style="height: 200px; overflow: hidden;" v-else>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style="height: 100%; width: 100%;"
        >
          <path
            d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
            style="stroke: none;"
            class="blue-bg"
          ></path>
        </svg>
      </div>
    </div>

    <div
      class="blue-bg"
      :id="$t('Pages').ProductPage.Customised.Intro.scrollId"
    >
      <div class="centerContent text-white">
        <div class="customIntro">
          <div class="text-h1 text-weight-bold h1custom">
            {{ $t("Pages").ProductPage.Customised.Intro.title }}
          </div>
          <div
            class="text-body1 text-weight-medium text-center"
            id="customiseDesc"
          >
            {{ $t("Pages").ProductPage.Customised.Intro.text }}
          </div>
        </div>

        <div class="q-pa-md q-gutter-md customCardArea">
          <ProductCardVertical
            :productImage="$t('Pages').ProductPage.Customised.Custom1.Img.src"
            :productTitle="$t('Pages').ProductPage.Customised.Custom1.title"
            :productDescription="
              $t('Pages').ProductPage.Customised.Custom1.text
            "
            :imageFrame="
              $t('Pages').ProductPage.Customised.Custom1.ImgFrame.src
            "
          />

          <ProductCardVertical
            :productImage="$t('Pages').ProductPage.Customised.Custom2.Img.src"
            :productTitle="$t('Pages').ProductPage.Customised.Custom2.title"
            :productDescription="
              $t('Pages').ProductPage.Customised.Custom2.text
            "
            :imageFrame="
              $t('Pages').ProductPage.Customised.Custom2.ImgFrame.src
            "
          />

          <ProductCardVertical
            :productImage="$t('Pages').ProductPage.Customised.Custom3.Img.src"
            :productTitle="$t('Pages').ProductPage.Customised.Custom3.title"
            :productDescription="
              $t('Pages').ProductPage.Customised.Custom3.text
            "
            :imageFrame="
              $t('Pages').ProductPage.Customised.Custom3.ImgFrame.src
            "
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import WavyHero from "../components/WavyHero";
import ProductCardTextRight from "../components/Product/ProductCardTextRight";
import ProductCardTextLeft from "../components/Product/ProductCardTextLeft";
import ProductCardVertical from "../components/Product/ProductCardVertical";

export default {
  name: "Product",
  components: {
    WavyHero,
    ProductCardTextRight,
    ProductCardTextLeft,
    ProductCardVertical
  }
};
</script>

<style lang="scss">
.customIntro {
  transition: 100ms;
  transition-timing-function: ease-out;
}

.customIntro:hover {
  transform: scale(1.05);
}

@media (hover: none) {
  .customIntro:hover {
    transform: none;
  }
}

.sections {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
}

/* LEFT RIGHT CARDS */
.productCard {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  padding-top: 50px;
  padding-bottom: 50px;

  .productText {
    width: 300px;
  }
}

.imgSize {
  height: 700px;
  width: auto;
}

@media screen and(max-width: 750px) {
  .productCard {
    display: flex;
    flex-direction: column;

    .productImg {
      align-self: center;
    }

    .productText {
      align-self: center;
      margin-bottom: 50px;
    }
  }
}
/* LEFT RIGHT CARDS END */

.customCardArea {
  display: flex;
  justify-content: space-between;
}

#customiseDesc {
  margin: 0 auto;
  width: 40%;
  padding: 30px;
}

#customised {
  text-align: center;
  padding-bottom: 100px;
}

.blue-bg {
  background-color: #7085ba;
  fill: #7085ba;
}

.white-bg {
  background-color: #f9f9f7;
  fill: #f9f9f7;
}

.h1custom {
  font-size: 3em;
}

@media screen and (max-width: 1150px) {
  #customiseDesc {
    width: 80%;
  }

  .customCardArea {
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

@media screen and (max-width: 600px) {
  #customiseDesc {
    width: 100%;
  }

  .h1custom {
    font-size: 2em;
  }
}
@media screen and(max-width: 400px) {
  .productCard {
    width: 100%;
  }

  .imgSize {
    height: 550px;
    width: auto;
  }

  .productText {
    width: 250px;
  }
}
</style>
