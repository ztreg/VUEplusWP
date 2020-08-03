<template>
  <a @click="$router.push({ path: `blog/${blogId}` })">
  <q-card flat class="blogCard">
    <div class="blogImg" :style="`background-image: url(${blogImage})`">
    </div>

    <div class="blogText" :id="blogId">
      <div class="text-grey-8">{{ blogDate }}</div>
      <div class="text-h5 text-bold q-mb-lg">{{ blogTitle }}</div>
      <div class="text-body1">{{ blogDescription }}</div>
    </div>
  </q-card>

  </a>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    blogDate: String,
    blogTitle: String,
    blogDescription: String,
    blogImage: String,
    blogId: String
  }
}
</script>

<style lang="scss" scoped>
a {
  color: initial;
  text-decoration: none;
}

.blogCard {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.blogText {
  padding: 20px;
  width: 65%;
}

.blogImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 35%;
  height: 100%;
}

@media screen and(max-width: 700px){
  .blogCard {
    margin: 0 auto;
    width: 400px;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }

  .blogImg {
    margin: 0 auto;
    width: 85%;
    height: 200px;
  }

  .blogText {
    width: 100%;
  }
}

@media screen and(max-width: 500px){
  .blogCard {
    width: 100%;
  }
}
</style>
