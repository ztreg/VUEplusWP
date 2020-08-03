<template>
  <div>
    <div id="hero-container" :style="`background-image: url(${heroImgUrl})`">
      
      <div id="heroContent">
        <div>
      
          <div class="text-h3 text-weight-bold"  id="hero-text-h">
            {{ heroHeader }}
          </div>

          <div class="text-h4" id="hero-text">
            {{ heroText }}
          </div>

          <div id="hero-form-container" v-if="emailForm===true">
            <EmailForm
             formName="HeroEmail"
            />
          </div>
        </div>
        
        <div id="testImg" v-if="undefined !== insideHeroImgUrl">
          
          <video class="gif1 inside" autoplay loop muted playsinline>
            <source  :src="insideHeroImgUrl" type="video/mp4">
          </video>
          <!-- <img class="gif1 inside" :src="insideHeroImgUrl" alt=""> -->
          <img class="around gif1" :src="insideHeroImgFrame" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailForm from './Utilities/EmailForm'

export default {
  name: 'WavyHero',
  components: {
    EmailForm
  },
  props: {
    heroImgUrl: String,
    heroText: String,
    heroHeader: String,
    insideHeroImgUrl: String,
    insideHeroImgFrame: String,
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
      email: '',
    }
  }
}
</script>

<style lang="scss" scoped>
#langSelector {
  color: white;
  background-color: white;
  margin: 30px;
  padding: 30px;
  
}

#hero-container {
  color: white;
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#heroContent {
  width: 1000px;
  padding-top: 40px;
  display: flex;
  margin: 0 auto;
}

#hero-text-h {
  margin-top: 140px;
}

#hero-text, #hero-form-container {
  margin-top: 20px;
}

#testImg {
  height: 900px;
  width: 700px;
  margin-left: 7% ;
  img, video {
    position: absolute;
    top: inherit;
    left: inherit;
    height: 700px;
  }
}

.inside {
  z-index: 1;
  border-radius: 10%;
  padding: 21px;
}

.around {
  z-index: 3;
}

@media screen and (max-width: 1200px) {
  #heroContent {
    width: 80%;
  }
}

@media screen and (max-width: 1085px) {
  #hero-container {
    background-size: cover;
  }

  #testImg {
    display: none;
  }

  #hero-text-h {
    margin-top: 40px;
  }
}

@media screen and (max-width: 450px) {
  #heroContent {
    width: 90%;
    padding-top: 30px;
  }

  #hero-text-h {
    margin-top: 0;
  }
  #hero-text {
    font-size: 1.8rem;
  }
}
</style>
