<template>
  <q-btn :to="'/'" id="desktop-logo-button" flat :ripple="false">
    <picture>
      <source srcset="statics/webp/logo-white.webp" type="image/webp">
      <img class="nav-logo" src="statics/png/logo-white.png" alt="Logo">
    </picture>

    <picture>
      <source srcset="statics/webp/logo-text-white.webp" type="image/webp">
      <img class="nav-logo" id="nav-logo-text" src="statics/png/logo-text-white.png" alt="Logo">
    </picture>
  </q-btn>
</template>

<script>
export default {
  name: 'LogoButton'
};
</script>

<style lang="scss">
#desktop-logo-button {
  min-width: 267px !important;
}

.nav-logo {
  display: inline !important;
  float: none;
}

#nav-logo-text {
  margin-left: -28px;
}
</style>
