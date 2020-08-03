<template>
  <div class="row detdu q-pb-xl sectionHeight">
    <h4 class="q-ma-lg q-pa-lg text-h4 text-weight-medium bordered text-white">
      {{ $t("Pages").IndexPage.ForwardSection.title }}
    </h4>


    <q-card class="my-card shadow-12" @click="$router.push({ path: 'why' })">
      <q-img
        class="dimmed cardPic"
        src="../../statics/indexWhy1.png"
        basic
      >
        <div class="absolute-center text-h4 text-center transparent indexCardText">
          {{ $t("Pages").IndexPage.ForwardSection.card1Subject }}
        </div>
      </q-img>
      <q-card-section>
        <div class="text-body1 text-weight-medium">
          {{ $t("Pages").IndexPage.ForwardSection.card1Desc }}
        </div>
      </q-card-section>
 <q-space />
      <q-card-actions>
        <div class="forwardSectionBtns">
          <q-btn
            class="q-ma-md q-pa-sm bg-black text-white text-weight-bold forwardButtons"
            :label="$t('Pages').IndexPage.ForwardSection.card1BtnText"
            icon-right="arrow_forward"
            to="why"
          />
        </div>
      </q-card-actions>
    </q-card>

    <q-card class="my-card shadow-12" @click="$router.push({ path: 'product' })">
      <q-img
        class="dimmed cardPic"
        src="../../statics/indexProduct1.png"
        basic
      >
        <div class="absolute-center text-h4 text-center transparent indexCardText">
           {{ $t("Pages").IndexPage.ForwardSection.card2Subject }}
        </div>
      </q-img>

      <q-card-section>
        <div class="text-body1 text-weight-medium">
          {{ $t("Pages").IndexPage.ForwardSection.card2Desc }}
        </div>
      </q-card-section>

      <q-space />

      <q-card-actions>
        <div class="forwardSectionBtns">
          <q-btn
            class="q-ma-md q-pa-sm bg-black text-white text-weight-bold forwardButtons"
            :label="$t('Pages').IndexPage.ForwardSection.card2BtnText"
            icon-right="arrow_forward"
            to="product"
          />
        </div>

 
      </q-card-actions>
    </q-card>

    <!--
      <div class="imgIcons">
        <img :src="indexSectionImage" :alt="indexSectionImageAlt">
      </div>
      <div class="self-center detduText q-pa-lg">   
        <div class="text-h4  text-weight-bolder wrap">
          {{ indexSectionTitle }}
        </div>
        <div class="text-body1 q-mt-lg q-mb-lg ">
          {{ indexSectionText }}
        </div>
      </div>
      -->
  </div>
</template>

<script>
export default {
  name: "IndexSection",
  props: {
    indexSectionTitle: String,
    indexSectionText: String,
    indexSectionImage: String,
    indexSectionImageAlt: String,
    indexAround: String
  },
  data() {
    return {};
  },
  methods: {
    cardClick() {

    }
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 350px;
  margin-top: 30px;
  margin-bottom: 30px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: $webotWhite;
  transition: 100ms;
  transition-timing-function: ease-out;
}

.my-card:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.cardPic{
  width: 100%;
  height: 250px;
  
}
.indexCardText {
  z-index: 1;
}

.sectionHeight {
  min-height: 100vh;
}
.imgIcons {
  background-color: inherit;
  max-width: 400px;
  margin-right: 10%;
}
.imgIcons > img {
  width: 100%;
}

.forwardButtons {
  width: 200px;
  border-radius: 10px;
  align-self: end;
  pointer-events: auto;
}
#forwardSection {
  width: 100%;
  text-align: center;
}
.detdu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;

  .imgIcons {
    order: 1;
  }

  .detduText {
    width: 33%;
    order: 2;
  }
}

@media (hover: none) {
  .my-card:hover {
    transform: none;
    cursor: initial;
    pointer-events: none;
  }
}

@media screen and(max-width: 750px) {
  .detdu {
    display: flex;
    flex-direction: column;

    .imgIcons {
      width: 70%;
      margin-right: 0%;
      order: 2;
      align-self: center;
    }

    .detduText {
      width: 100%;
      order: 1;
      align-self: center;
      margin: 0 auto;
    }
  }
  #forwardSection {
    display: none;
  }
  .forwardSectionBtns,
  .detdu {
    text-align: center;
    margin: 0 auto;
  }
}
</style>
