<script>
import axios from 'axios';
import Post from '../components/Post.vue';
export default {
    components: {
        Post,
    },
  data() {
    return {
      posts: {},
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await axios.get("api/auth/posts/media");
      this.posts = response.data.posts;
    },
  },
};
</script>


<template>
  <div>

    <div v-for="post in this.posts" :key="post.title">
        <Post :post=post />
    </div>
  </div>
</template>

<style>
</style>