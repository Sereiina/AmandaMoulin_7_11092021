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
  <div class="wrap-post">
    <div class="author-post">
      <p>Posté par : {{post.user.nom}} {{post.user.prenom}}</p>
      <h2>{{ post.title }}</h2>
      <img v-bind:src="post.content" alt="" />
    </div>
    <!-- bouton pour modifier un post -->
    <div class="button-modify-delete">
      <PostModify :postId="this.post.postId" />
      <PostDelete :postId="this.post.postId" />
    </div>
    <div>

    </div>
      <!-- composant permettant d'envoyer un commentaire -->
      <CommentSend :postId="this.post.postId"/>

    <div class="wrap-comment-list">
      <!-- composant affichant les comments -->
      <CommentsList :postId="this.post.postId" />
    </div>

  </div>
</template>

<style>

  .button-modify-delete {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .wrap-post {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
  .author-post {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: column;
    border: black solid 2px;
    width: 80% ;
    margin-top: 3em;
    border-radius: 1em 1em 0 0;
}
  .author-post > p {
    color: black;
    width: 100%;
    text-align: center;
    margin-top: 0.5em;
    margin-bottom: 0 ;
    border-bottom: black solid 2px ;
  }
  .author-post > h2 {
    margin: 0em ;
    border-bottom: 2px black solid;
    text-align: center;
    width: 100%;
  }
  .author-post > img {
    width:100%;
    
  }

  @media screen and (min-width: 750px) {
  .author-post {
    width: 40%;
  }
}
</style>