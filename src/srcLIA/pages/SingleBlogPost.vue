<template>
  <q-page>
    <WavyHero
      heroImgUrl="statics/WaveHero5.png"
      :heroHeader="title"
    />

    <div class="centerContent">
     
      <div id="postContent">

        <div v-html="content" class="content"></div>

        <q-separator class="postSeparator" />

        <div id="postDate" class="text-body1 text-grey-8" v-if="published !== ''">
          <span class="text-bold text-grey-19">Publicerad: </span>
          {{ new Date(published).toLocaleDateString() }}
          <div v-if="updated !== ''">
            <span class="text-bold text-grey-19">Uppdaterad: </span>
          {{ new Date(updated).toLocaleDateString() }}
          </div>
        </div> 
      </div>
    </div>
  </q-page>
</template>

<script>
import WavyHero from '../components/WavyHero'

export default {
  name: 'Blog',
  components: {
    WavyHero
  },
  async created() {
    const postid = this.$route.params.id
    const blogid = '8277662472893830813'
    const url = `https://www.googleapis.com/blogger/v3/blogs/${blogid}/posts/${postid}?key=${process.env.BLOGAPIKEY}`
    const response = await this.$axios.get(url)
    this.published = response.data.published
    this.updated = response.data.updated
    this.title = response.data.title
    this.content = response.data.content
  },
  data () {
    return {
      title: '',
      content: '',
      published: '',
      updated: ''
    }
  }
}
</script>

<style lang="scss">
#postContent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  width: 50%;

  .separator {
    width: 100%;
    margin: 0;
        padding: 0;

    a, img {
      width: 100%;
      margin: 0 !important;
      height: auto;
    }
  }
}

#postImg {
  width: 50%;
  height: auto;
  margin-bottom: 50px;
}

#postText, #postDate {
  width: 50%;
  margin-bottom: 50px;
}

#updateDate {
  width: 50%;
}

.postSeparator {
  margin-bottom: 50px;
  margin-top: 50px;
}
</style>