<template>
  <div :class="cardLeftBgColor">
    <div class="centerContent">
      <div class="row q-pa-lg q-pt-lg justify-center staffTest">
        <div class="col-md text-black self-center portText q-mr-lg offset-md-2 staffT">
            <div class="text-left">
              <div class="text-h5 text-weight-bolder">
                {{ cardLeftName }}
              </div>
              <div class="text-h6">
                {{ cardLeftTitle }}
              </div>
              <div class="text-subtitle1">
                {{ cardLeftNmr }}
              </div>
              <div class="text-subtitle1">
                {{ cardLeftMail }}
              </div>
          </div>
        </div>
        <div class="self-center offset-md-2 staffImg">
          <div class="profilesImg" :style="`background-image:url(${cardLeftImage})`"></div>
   
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'StaffCardLeft',
    props: {
      cardLeftBgColor: String,
      cardLeftName: String,
      cardLeftTitle: String,
      cardLeftImage: String,
      cardLeftNmr: String,
      cardLeftMail: String
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
  .staffT {
   margin: 0;
    padding: 0;
  }
}

</style>

