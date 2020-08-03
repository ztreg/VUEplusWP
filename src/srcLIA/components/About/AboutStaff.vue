<template>
  <div>
    <div style="height: 100px; overflow: hidden;" v-if="undefined !== $t('Pages').AboutPage.StaffMembers && $t('Pages').AboutPage.StaffMembers.length > 0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="blue-bg">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;" class="bgWhite"></path>
        </svg>
      </div>
    <div v-for="(StaffItem, index) in $t('Pages').AboutPage.StaffMembers" :key="index">
      <div v-if="index % 2 == 0">
        <StaffCardLeft 
          class="profiles"
          cardLeftBgColor="bgWhite"
          :cardLeftName="StaffItem.StaffName"
          :cardLeftNmr="StaffItem.StaffPhonenumber"
          :cardLeftMail="StaffItem.StaffEmail"
          :cardLeftTitle="StaffItem.StaffTitle"
          :cardLeftImage="StaffItem.StaffPortrait"
        />
        <div style="height: 100px; overflow: hidden;" v-if="index < $t('Pages').AboutPage.StaffMembers.length - 1">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="bgWhite">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;" class="blue-bg"></path>
          </svg>
        </div>

      </div>
      <div v-else>
        <StaffCardRight 
          class="profiles"
          cardRightBgColor="blue-bg"
          :cardRightName="StaffItem.StaffName"
          :cardRightNmr="StaffItem.StaffPhonenumber"
          :cardRightMail="StaffItem.StaffEmail"
          :cardRightTitle="StaffItem.StaffTitle"
          :cardRightImage="StaffItem.StaffPortrait"
        />
        
        <div style="height: 100px; overflow: hidden;" v-if="index < $t('Pages').AboutPage.StaffMembers.length - 1">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;" class="blue-bg">
            <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.27,69.56 L500.00,150.00 L0.00,150.00 Z" style="stroke: none;" class="bgWhite"></path>
          </svg>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import StaffCardLeft from './AboutStaffCards/StaffCardLeft'
import StaffCardRight from './AboutStaffCards/StaffCardRight'


export default {
   name: 'AboutStaff',
   components: {
     StaffCardLeft,
     StaffCardRight
   },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="scss">
.bgWhite {
   background-color: $webotWhite;
  fill: $webotWhite;
}

.bgProfile1 {
  background-color: $webotWhiteTheme2;
  fill: $webotWhiteTheme2;
}
.bgProfile2 {
  background-color: $webotWhiteTheme1;
   fill: $webotWhiteTheme1;
}
.profiles {
  height: 700px;
}
.profilesImg {
  height: 600px;
  border-radius: 20px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 500px;
}

.portText {
  background-color: inherit;
}

@media screen and (max-width: 1200px) {
  .profilesImg {
    margin: 0 auto;

  }
  .profiles {
  height: 800px;
  }
}

@media screen and (max-width: 850px) {
  .profilesImg {
    margin: 0 auto;
    width: 300px;
    height: 400px;
  }
  .profiles {
    height: 700px;
  }
}

@media screen and (max-width: 500px) {
  .profilesImg {
    margin: 0;
    margin-bottom: 20px;
    padding: 0;
    width: 300px;
    height: 300px;

  }
  .profiles {
    height: 500px;
   
  }
}

@media screen and (max-width: 350px) {
  .profilesImg {
    margin: 0;
    padding: 0;
    width: 250px;
    height: 250px;

  }

}
</style>