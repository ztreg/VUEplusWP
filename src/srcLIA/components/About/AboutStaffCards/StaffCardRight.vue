<template>
  <div :class="cardRightBgColor">
    <div class="centerContent">
      <div class="row q-pa-lg q-pt-lg justify-center staffTest">
        
        <div class="self-center staffImg">
          <div class="profilesImg" :style="`background-image:url(${cardRightImage})`"></div>

        </div> 
         <div class="col-md text-black self-center portText q-ml-lg offset-md-2 staffT">
          <div class="text-left text-white">
            <div class="text-h5 text-weight-bolder">
              {{ cardRightName }}
            </div>
            <div class="text-h6">
              {{ cardRightTitle }}
            </div>
            <div class="text-subtitle1">
              {{ cardRightNmr }}
            </div>
             <div class="text-subtitle1">
               {{ cardRightMail }}
              </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: 'StaffCardRight',
    props: {
      cardRightBgColor: String,
      cardRightName: String,
      cardRightTitle: String,
      cardRightImage: String,
      cardRightNmr: String,
      cardRightMail: String
    },

    data() {
      return {
      };
  }
}
</script>

<style lang="scss">
@media screen and(max-width: 650px){
  .staffTest {
    display: flex;
    flex-direction: column;
    

    .staffT {
      order: 2;
      align-self: center;
    }

    .staffImg {
      order: 1;
      align-self: center;
     
    }
  }
}
</style>