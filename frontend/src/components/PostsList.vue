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
      isModerator: {},
    };
  },
  beforeMount() {
    this.getPosts();
  },
  created() {
    this.getUser();
  },
  methods: {
    async getPosts() {
      const response = await axios.get("api/auth/posts/media");
      this.posts = response.data.posts;
    },
    async getUser() {
      const profil = await axios.get("api/auth/profil")
      this.userId = profil.data.id;
      this.isModerator = profil.data.isModerator;
    },
    // canDelete() {
    //   return this.isModerator;
    // },
    // canEdit(postAuthorId) {
    //   return this.userId == postAuthorId;
    // }
  },
};
</script>


<template>
  <div>

    <div v-for="post in this.posts" :key="post.postId">
        <Post
          :post=post
          :canDelete="isModerator"
          :canEdit="userId == post.user.id"
        />
    </div>
  </div>
</template>

<style>
</style>