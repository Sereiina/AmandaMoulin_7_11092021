<script>
import axios from "axios";

export default {
  name: "NewPost",
  data() {
    return {
      inputTitle: "",
      inputMedia: "",
    };
  },

  methods: {
    async postMedia(title, content) {
      await axios.post("api/auth/posts/media", {
        title: title,
        content: content,
      });
    },
  },
};
</script>

<template>
  <div class="wrap-new-post">
    <form class="wrap-form-post" @submit="postMedia(inputTitle, inputMedia)">
      <h1>Nouvelle publication</h1>

      <label for="">Titre de la publication</label>
      <input
        class="new-post-form"
        type="text"
        placeholder="Title de la publication ..."
        id="inputTitle"
        maxlength="30"
        required
        v-model="inputTitle"
      />

      <label for="">Url de votre publication</label>
      <input
        class="new-post-form"
        type="url"
        placeholder="votre media ..."
        id="inputMedia"
        required
        v-model="inputMedia"
      />

      <!-- <input type="submit" @click="createPostMedia" value="Envoyer votre publication"> -->
      <input
        class="new-post-input"
        type="submit"
        value="Envoyer votre publication"
      />
    </form>
  </div>
</template>

<style lang="css">
.wrap-new-post {
  display: flex;
  justify-content: center;
  margin-top: 4em;
}

.wrap-form-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  width: 75.5%;
  padding: 1em;
  border: solid black 2px;
  border-radius: 1em;
  background-color: #ffd7d7;
}
.new-post-form {
  width: 80%;
  height: 2em;
  margin-bottom: 2em;
  padding: 0.5em;
}
.new-post-input {
  width: 84%;
  padding: 0.5em;
  background-color: #ffeded;
  border: black 2px solid;
  cursor: pointer;
}
@media screen and (min-width: 750px) {
  .wrap-form-post {
    width: 37.5%;
  }
}
</style>