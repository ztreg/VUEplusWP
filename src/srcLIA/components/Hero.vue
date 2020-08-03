<template>
  <div>
    <div v-if="index===true" id="hero-container-index">
      <img :src="imgUrl" alt="" class="justify-center">
      <div class="text-h3 text-weight-bold" id="centered-text-index">
        {{ imgText }}
        <q-form name="tab4" @submit="onSubmit" class="q-ma-lg text-white" v-if="emailForm===true">
          <q-tabs v-model="tab" shrink>
            <q-input dense borderless name="tab5" v-model="email" type="email" placeholder="Enter your email" class="bg-white q-pl-sm" text-color="white" autogrow />
            <q-btn id="email-submit-button" name="tab6" type="submit" color="green" label="Get started"/>
          </q-tabs>
        </q-form>
      </div>
        
    </div>
    <div v-else id="hero-container">
      <img :src="imgUrl" alt="">
      <div class="text-h3 text-weight-bold" id="centered-text">
        {{ imgText }}
        <q-form name="tab4" @submit="onSubmit" class="q-ma-lg text-white" v-if="emailForm===true">
          <q-tabs v-model="tab" shrink>
            <q-input dense borderless name="tab5" v-model="email" type="email" placeholder="Enter your email" class="bg-white q-pl-sm" text-color="white" autogrow />
            <q-btn id="email-submit-button" name="tab6" type="submit" color="green" label="Get started"/>
          </q-tabs>
        </q-form>
      </div>
        
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    imgUrl: String,
    imgText: String,
    emailForm: {
      type: Boolean,
      default: false
    },
    index: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tab: '',
      email: ''
    }
  },
   methods: {
    onSubmit() {
      alert('Hej')
    }
   }
}
</script>

<style lang="scss">
#hero-container, #hero-container-index {
  position: relative;
  text-align: center;
  color: white;
  height: 600px;
  overflow: hidden;
}

#centered-text, #centered-text-index {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#hero-container-index {
  img {
    width: 100%;
    height: 600px;
     
  }
}

img {
  width: 100%;
  height: auto;
}
</style>
