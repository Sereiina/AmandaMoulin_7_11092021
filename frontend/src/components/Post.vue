<script>
import axios from "axios";

import CommentSend from "../components/CommentSend.vue";
import CommentsList from "../components/CommentsList.vue";
import PostModify from "../components/PostModify.vue";
import PostDelete from "../components/PostDelete.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Post",
  props: ["post", "canDelete", "canEdit"],
  components: {
    CommentSend,
    CommentsList,
    PostModify,
    PostDelete,
    Modal,
  },
  data() {
    return {
      comments: {},
      postModal: false,
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      this.comments = await axios.get(
        `api/auth/posts/${this.post.postId}/comments`
      );
    },
    scrollDisabler(state) {
      let target = document.documentElement;
      if (state == "on") {
        target.style.overflow = "hidden";
        return;
      }
      target.style.overflow = "auto";
    },
  },
};
</script>


<template>
  <main>
    <div class="wrap-post">
      <div
        class="author-post"
        @click="
          postModal = true;
          scrollDisabler('on');
        "
      >
        <p class="text_max_width post_title_overflow">
          Posté par : {{ post.user.nom }} {{ post.user.prenom }}
        </p>
        <h2 class="text_max_width post_title_overflow">{{ post.title }}</h2>
        <img v-bind:src="post.content" alt="" />
      </div>
      <button
        class="post-details"
        @click="
          postModal = true;
          scrollDisabler('on');
        "
      >
        Afficher plus de détails
      </button>
    </div>

    <Modal
      v-show="postModal"
      @close="
        postModal = false;
        scrollDisabler('off');
      "
    >
      <template v-slot:header>
        <div class="postModal_meta">
          <h1 class="text_max_width post_comment_overflow">{{ post.title }}</h1>
          <h2 class="text_max_width post_comment_overflow">
            Posté par : {{ post.user.nom }} {{ post.user.prenom }}
          </h2>
        </div>
      </template>

      <template v-slot:body>
        <div class="postModal_content_container">
          <img
            v-bind:src="post.content"
            v-bind:alt="post.title"
            class="postModal_content"
          />
        </div>
        <!-- bouton pour modifier un post -->
        <div class="button-modify-delete">
          <PostDelete v-show="canDelete" :postId="post.postId" />
          <PostModify v-show="canEdit" :post="post" />
        </div>
      </template>

      <template v-slot:footer>
        <div class="postModal_commentSection">
          <div class="wrap-comment-list">
            <!-- composant affichant les comments -->
            <CommentsList :postId="post.postId" />
          </div>
          <!-- composant permettant d'envoyer un commentaire -->
          <CommentSend :postId="post.postId" />
        </div>
      </template>
    </Modal>
  </main>
</template>

<style>
.text_max_width {
  width: 100%;
}
.post_title_overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post_comment_overflow {
  text-overflow: clip;
  white-space: wrap;
  overflow-wrap: break-word;
}
.modal {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
.postModal_meta > h1,
h2 {
  margin: 0;
  color: white;
}
.postModal_meta > h2 {
  font-size: 1.2em;
}
.modal-header,
.modal-footer {
  border: 0;
}

.postModal_commentSection {
  width: 100%;
}
.postModal_content {
  width: 100%;
}

.postModal_content_container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.modal-body {
  width: 50%;
}
.modal-footer {
  width: auto;
}

.modal-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.button-modify-delete {
  display: flex;
  flex-wrap: nowrap;
  text-align: center;
  align-items: baseline;
  justify-content: flex-start;
}
.button-modify,
.button-delete {
  background-color: transparent;
  color: white;
  border: 1px white solid;
  transition: 0.3s ease;
}
.button-modify:hover,
.button-delete:hover {
  background-color: white;
  color: black;
  border: 1px white solid;
  transition: 0.3s ease;
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
  width: 80%;
  margin-top: 3em;
  border-radius: 1em 1em 0 0;
  background-color: #ffd7d7;
  cursor: pointer;
}
.author-post > p {
  color: black;
  width: 100%;
  text-align: center;
  margin-top: 0.5em;
  margin-bottom: 0;
  border-bottom: black solid 2px;
}
.author-post > h2 {
  margin: 0em;
  border-bottom: 2px black solid;
  text-align: center;
  width: 100%;
  color: black;
}
.author-post > img {
  width: 100%;
}
.post-details {
  width: 80.3%;
  margin-bottom: 2em;
  padding: 0.7em;
  cursor: pointer;
  border: solid 1px black;
  background-color: #ffd7d7;
}
.post-details:hover {
  background-color: #fcc0c0;
  font-weight: 600;
  border: solid 1px black;
}

#Layer_1 {
  fill: white !important;
}
#Layer_1:hover {
  fill: red !important;
}

@media screen and (min-width: 1200px) {
  .author-post {
    width: 40%;
  }
  .post-details {
    width: 40.2%;
  }
}
@media screen and (max-width: 1200px) {
  .modal-body {
    width: 100% !important;
  }
}
</style>