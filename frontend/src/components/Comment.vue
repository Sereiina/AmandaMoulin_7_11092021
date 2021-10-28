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
  <div class="wrapper-comment">

    <CommentDelete :postId="this.comment.postId" :commentId="this.comment.commentId" />
    <p> {{comment.user.nom}} {{comment.user.prenom}} : </p>
    <p>{{ this.comment.content }}</p>
  </div>
</template>

<style>

  .wrapper-comment {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px black solid;
    width: 15em;
;
  }
  .wrapper-comment > p {
    margin-left: 2em;
  }
  @media screen and (min-width: 750px) {
  .wrapper-comment {
    width: 22em;
  }
}
</style>

