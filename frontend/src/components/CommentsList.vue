<script>
import axios from "axios";
import Comment from "../components/Comment.vue";
export default {
  name: "CommentsList",
  props: ["postId"],
  components: {
    Comment,
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
      const response = await axios.get(
        `api/auth/posts/${this.postId}/comments`
      );
      this.comments = response.data;
    },
  },
};
</script>


<template>
  <div>
    <div v-for="comment in this.comments" :key="comment.content">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<style>
</style>