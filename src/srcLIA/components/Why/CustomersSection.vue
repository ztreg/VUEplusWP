<template>
  <div class="centerContent q-pa-md" id="customers-container" v-if="this.show">
    <div class="justify-center col" id="customersBig">
      
    <q-carousel
      :id="scrollId"
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      control-color="primary"
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <!-- autoplay -->
      <q-carousel-slide :name="1">
        <CarouselSlideCard
          slideImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
          slideTitle="Nöjd kund 1"
          slideCompany="Företag 1"
          slideText="We Bot är ett jättebra företag!"
        />
        </q-carousel-slide>

      <q-carousel-slide :name="2">
        <CarouselSlideCard
          slideImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
          slideTitle="Nöjd kund 2"
          slideCompany="Företag 2"
          slideText="We Bot är ett jättebra företag!"
        />
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <CarouselSlideCard
          slideImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
          slideTitle="Nöjd kund 3"
          slideCompany="Företag 3"
          slideText="We Bot är ett jättebra företag!"
        />
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <CarouselSlideCard
          slideImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
          slideTitle="Nöjd kund 4"
          slideCompany="Företag 4"
          slideText="We Bot är ett jättebra företag!"
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
  
    <div class="q-pa-xl row q-gutter-md justify-center">
      <div class="col-10 col-md">
      <CustomerCardSmall
        cardImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
        cardTitle="Nöjd kund 5"
        cardText="We Bot är grymt!"
      />
    </div>
     <div class="col-10 col-md">
      <CustomerCardSmall
        cardImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
        cardTitle="Nöjd kund 6"
        cardText="We Bot är grymt!"
      />
     </div>
      <div class="col-10 col-md">
      <CustomerCardSmall
        cardImg="https://previews.123rf.com/images/kritchanut/kritchanut1407/kritchanut140700071/29727801-businessman-silhouette-avatar-profile-picture.jpg"
        cardTitle="Nöjd kund 7"
        cardText="We Bot är grymt!"
      />
    </div>
    </div>
 </div>
</template>

<script>
import CarouselSlideCard from './CarouselSlideCard'
import CustomerCardSmall from './CustomerCardSmall'

export default {
  name: "CustomersSection",
  props: {
    scrollId: String,
     show: {
      type: Boolean,
      default: true
    }
  },
  components: {
    CarouselSlideCard,
    CustomerCardSmall
  },
  data() {
    return {
      slide: 1
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px){
  #customersBig {
    height: 400px !important;
  }
}

</style>
