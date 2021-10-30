<script>
import CommentDelete from '../components/CommentDelete.vue';
export default {
  name: "Comment",
  props: ["comment", "canDelete"],

  components: {
    CommentDelete,
  }
};
</script>


<template>

  <main>

  <div class="comment-container">
    <p> {{comment.user.nom}} {{comment.user.prenom}} : </p>

    <div class="wrapper-comment-meta">

       <p>{{ this.comment.content }}</p>
      <CommentDelete v-show="canDelete" :postId="this.comment.postId" :commentId="this.comment.commentId" />

    </div>
  </div>

  </main>

</template>

<style>

.comment-container{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.wrapper-comment-meta{
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
}



  .wrapper-comment {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border: 2px black solid;
    width: 15em;
    padding: 1em;
    background-color: #ffd7d7;
  }
  
  @media screen and (min-width: 750px) {
  .wrapper-comment {
    width: 22em;
  }
}
</style>

