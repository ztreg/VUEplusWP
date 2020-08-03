<template>
  <div class="row q-ma-xl self-center">
    <h3 class="col-12 text-center">Produkter</h3>
    <div class="" id="refs" v-for="(CurrentItem, Index) in ProdArray" :key="Index">
      <div class="col-12 text-center">
        <div class="text-h4 q-ma-lg">
          <div class="">
            {{CurrentItem.title}}
                <q-avatar
                class="products"
                text-color="blue-9"
                :icon="CurrentItem.icon"
                size="200px"
              />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Spacey',
  data () {
    return {
      ProdArray: [
        {
          title: 'Hat',
          icon: 'school'
        },
        {
          title: 'Book',
          icon: 'book'
        },
        {
          title: 'Computer',
          icon: 'computer'
        },
        {
          title: 'Square',
          icon: 'stop'
        },
        {
          title: 'Speed',
          icon: 'speed'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  height: 100px;
  width: 150px;
  border-radius: 10%;
  opacity: 0.9;
}
.products:hover {
  opacity: 1;
  transform: scale(1.2);
}
#refs {
  margin: 0 auto;
}
</style>
