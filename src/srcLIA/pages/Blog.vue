<template>
  <q-page>
    <WavyHero
      heroImgUrl="statics/WaveHero5.png"
      heroHeader="Blogg"
    />

    <div class="centerContent postContainer" v-bind:key="blogPosts.indexOf(blogPost)" v-for="blogPost in blogPosts">
      <BlogPost 
        :blogDate="new Date(blogPost.updated).toLocaleDateString()"
        :blogTitle="blogPost.title"
        :blogDescription="blogPost.description"
        :blogImage="blogPost.urlToImage"
        :blogId="blogPost.id"
      />
      <q-separator class="postSeparator" />
    </div>

  </q-page>
</template>

<script>
import WavyHero from '../components/WavyHero'
import BlogPost from '../components/Blog/BlogPost'

export default {
  name: 'Blog',
  components: {
    WavyHero,
    BlogPost
  },
  async created() {
    const url2 = `https://www.googleapis.com/blogger/v3/blogs/8277662472893830813/posts?key=${process.env.BLOGAPIKEY}`
    const response2 = await this.$axios.get(url2)
  
    this.blogPosts = response2.data.items
    for(let i = 0; i < this.blogPosts.length; i++) {
      let content = response2.data.items[i].content;
      let extractedUrls = content.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%\/.\w-]*)?\??(?:[-+=&;%@.\w]*)#?\w*)?)/gm);
      let extractedDescription = content.split('<')[0]

      if (extractedDescription.length === 0) {
        let elem = document.createElement('div')
        elem.innerHTML = content
        extractedDescription = elem.firstChild.innerText
      }

      if (extractedUrls === null) {
        this.blogPosts[i].urlToImage = 'https://via.placeholder.com/500'
      } else {
        this.blogPosts[i].urlToImage = extractedUrls[0]
      }
      this.blogPosts[i].description = extractedDescription
    }
  },
  data () {
    return {
      blogPosts: []
    }
  }
}
</script>

<style lang="scss" scoped>
.postContainer {
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

.postSeparator {
  margin-top: 50px;
}

@media screen and(max-width: 500px){
.postContainer {
  padding-left: 20px;
  padding-right: 20px;
}
}
</style>
