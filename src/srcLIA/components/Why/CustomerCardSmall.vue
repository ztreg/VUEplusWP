<template>
  <q-card class="vertical-card">
    <img
      :src="cardImg"
    />

    <q-card-section>
      <div class="text-h6 q-mb-md">{{ cardTitle }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none vertical-card-text text-body1 q-mb-lg">{{ cardText }}</q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'CustomerCardSmall',
  props: {
    cardImg: String,
    cardTitle: String,
    cardText: String
  }
};
</script>

<style lang="scss" scoped>
.vertical-card {
  background-color: transparent;
  width: 100%;
  max-width: 300px;
}
</style>
