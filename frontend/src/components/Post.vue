<script>
import axios from 'axios';

import CommentSend from '../components/CommentSend.vue';
import CommentsList from '../components/CommentsList.vue';

export default {
  name: "Post",
  props: ['post'],
  components: {
      CommentSend,
      CommentsList
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

    <!-- composant ajout comment -->
    <CommentSend :postId="this.post.postId"/>
    <!-- <div v-for="comment in this.comments" :key="comment.content">
        <Comment :comment=comment />
    </div> -->

    <CommentsList :postId="this.post.postId" />

  </div>
</template>

<style>
</style>

