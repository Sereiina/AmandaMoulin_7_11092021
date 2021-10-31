<script>
import axios from "axios";
import Modal from "../components/Modal.vue";

export default {
  name: "PostModify",
  props: ["post"],
  components: {
    Modal,
  },
  data() {
    return {
      ModifTitle: "",
      ModifMedia: "",
      editPost: false,
    };
  },
  created() {
    this.deleteFooter();
    this.ModifTitle = this.post.title;
    this.ModifMedia = this.post.content;
  },
  methods: {
    async postModify(title, content) {
      await axios.put(`api/auth/posts/media/${this.post.postId}`, {
        title: title,
        content: content,
      });
      window.location.reload();
    },
    deleteFooter() {
      const footerKiller = document.getElementById("killmeplz");
      if (footerKiller) {
        footerKiller.closest("footer").remove();
      }
    },
  },
};
</script>


<template>
  <div>
    <button class="button-modify" @click="editPost = !editPost">
      Modifier
    </button>
    <Modal v-show="editPost" @close="editPost = false">
      <template v-slot:header>
        <span></span>
      </template>

      <template v-slot:body>
        <h1 class="modifyTitle">Modifier votre publication</h1>
        <form
          class="wrap-post-modify w"
          @submit="postModify(ModifTitle, ModifMedia)"
        >
          <label for="">Titre de la publication :</label>
          <input
            class="modify-post-form"
            type="text"
            id="ModifTitle"
            maxlength="255"
            required
            v-model="ModifTitle"
            :placeholder="[[post.title]]"
          />

          <label for="">Url de votre publication :</label>
          <input
            class="modify-post-form"
            type="url"
            id="ModifMedia"
            required
            v-model="ModifMedia"
            :placeholder="[[post.content]]"
          />

          <input
            class="modify-post-input"
            type="submit"
            value="Modifier votre publication"
          />
        </form>
      </template>

      <template v-slot:footer>
        <div id="killmeplz"></div>
      </template>
    </Modal>
  </div>
</template>

<style lang="css">
.modifyTitle {
  color: white;
  font-size: 2em;
}

.button-modify {
  align-content: center;
  text-align: center;
  width: 6em;
  padding: 0.5em;
  font-size: 17px;
  cursor: pointer;
}

.wrap-post-modify {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  justify-content: center;
  display: flex;
  border: black 2px solid;
  flex-wrap: nowrap;
  width: 12em;
  flex-direction: column;
  align-items: center;
  font-size: 1.4em;
  background-color: #ffd7d7;
  padding: 1em;
  border-radius: 1em;
}
.modify-post-form {
  width: 80%;
  height: 2em;
  margin-bottom: 2em;
  margin-top: 1em;
  padding: 0.5em;
}
.modify-post-input {
  width: 84%;
  padding: 0.5em;
  background-color: #ffeded;
  border: black 2px solid;
  cursor: pointer;
}

@media screen and (min-width: 750px) {
  .wrap-post-modify {
    width: 100%;
    width: 13em;
    font-size: 1.5em;
  }
}
</style>