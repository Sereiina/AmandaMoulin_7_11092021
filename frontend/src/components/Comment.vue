<script>
import CommentDelete from '../components/CommentDelete.vue';
export default {
  name: "Comment",
  props: ["comment"],

  components: {
    CommentDelete,
  }
};
</script>


<template>
  <div>

    <p>{{ this.comment.content }}</p>
    <CommentDelete :postId="this.comment.postId" :commentId="this.comment.commentId" />
  </div>
</template>

<style>
</style>

