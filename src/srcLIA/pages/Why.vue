<template>
  <q-page>
    <WavyHero
      :heroImgUrl="$t('Pages').WhyPage.Hero.BgImg.src"
      :heroHeader="$t('Pages').WhyPage.Hero.title"
      :heroText="$t('Pages').WhyPage.Hero.text"
    />

    <CustomersSection
      :scrollId="$t('Pages').WhyPage.Customers.scrollId"
      :show="$t('Pages').WhyPage.Customers.show"
    />

    <WhySection
      :scrollId="$t('Pages').WhyPage.Why.scrollId"
    />
  </q-page>
</template>

<script>
import WavyHero from '../components/WavyHero'
import CustomersSection from '../components/Why/CustomersSection'
import WhySection from '../components/Why/WhySection'

export default {
  name: 'Why',
  components: {
    WavyHero,
    CustomersSection,
    WhySection
  }
}
</script>
