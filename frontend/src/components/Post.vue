<script>
import axios from 'axios';

import CommentSend from '../components/CommentSend.vue';
import CommentsList from '../components/CommentsList.vue';
import PostModify from '../components/PostModify.vue';
import PostDelete from '../components/PostDelete.vue';
export default {
  name: "Post",
  props: ['post'],
  components: {
      CommentSend,
      CommentsList,
      PostModify,
      PostDelete,
  },
  data() {
    return {
      comments: {},
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      this.comments = await axios.get(`api/auth/posts/${this.post.postId}/comments`);
    },
  },
};
</script>


<template>
  <div>
    <h2>{{ post.title }}</h2>
    <img v-bind:src="post.content" alt="" />
    <!-- bouton pour modifier un post -->
    <PostModify :postId="this.post.postId"/>
    <PostDelete :postId="this.post.postId" />
    <!-- composant ajout comment -->
    <CommentSend :postId="this.post.postId"/>
    <!-- composant affichant les comments -->
    <CommentsList :postId="this.post.postId" />

  </div>
</template>

<style>
</style>

