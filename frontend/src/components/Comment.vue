<script>
import CommentDelete from "../components/CommentDelete.vue";
export default {
  name: "Comment",
  props: ["comment", "canDelete"],

  components: {
    CommentDelete,
  },
};
</script>


<template>
  <main>
    <div class="comment-container">
      <div class="comment-author-and-delete">
        <p>{{ comment.user.nom }} {{ comment.user.prenom }} :</p>
        <CommentDelete
          v-show="canDelete"
          :postId="this.comment.postId"
          :commentId="this.comment.commentId"
        />
      </div>

      <div class="wrapper-comment-meta">
        <p class="post_comment_overflow text_max_width">
          {{ this.comment.content }}
        </p>
      </div>
    </div>
  </main>
</template>

<style>
.comment-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid black;
  background-color: white;
}
.comment-author-and-delete {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px 0 15px;
}
.wrapper-comment-meta {
  /* display: flex;
  justify-content: space-around;
  flex-direction: row; */
  width: 95%;
  padding: 15px;
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

@media screen and (min-width: 1200px) {
}
</style>
