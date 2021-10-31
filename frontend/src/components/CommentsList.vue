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
      isModerator: {},
    };
  },
  beforeMount() {
    this.getComments();
  },
  created() {
    this.getUser();
  },
  methods: {
    async getComments() {
      const response = await axios.get(
        `api/auth/posts/${this.postId}/comments`
      );
      this.comments = response.data;
    },
    async getUser() {
      const profil = await axios.get("api/auth/profil");
      this.userId = profil.data.id;
      this.isModerator = profil.data.isModerator;
    },
    canDelete(commentAuthorId) {
      if (this.isModerator || this.userId == commentAuthorId) {
        return true;
      }
      return false;
    },
  },
};
</script>


<template>
  <div>
    <div v-for="comment in this.comments" :key="comment.commentId">
      <Comment :comment="comment" :canDelete="canDelete(comment.user.id)" />
    </div>
  </div>
</template>

<style>
</style>