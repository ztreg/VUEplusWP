<template>
   <div class="row q-ma-xl self-center"  v-if="IndexReferencesArray.length >= 5 && this.show===true">
    
     <div class="col-12 text-center" >
         <div class="text-h4 q-ma-lg">
           {{ indexSection2Title }}
         </div>
      </div>  
      <div id="refs" v-for="(CurrentItem, Index) in IndexReferencesArray" :key="Index">
         <q-avatar
           class="references" 
           text-color="blue-4"
           :icon="CurrentItem.link"
           size="200px"
         />
      </div>
  </div>
  
</template>

<script>
export default {
  name: 'IndexReferences',
  props: {
    indexSection2Title: String,
    IndexReferencesArray: Array,
     show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return{

    }
  },
 
}
</script>

<style lang="scss" scoped>
.references {
  height: 100px;
  width: 150px;
  border-radius: 10%;
  opacity: 0.3;
}
.references:hover {
  opacity: 1;
}
#refs {
  margin: 0 auto;
}
</style>>

