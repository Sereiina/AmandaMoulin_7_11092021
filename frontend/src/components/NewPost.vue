<script>
import axios from "axios";


export default {
    name: 'NewPost',
    data() {
        return {
            inputTitle: "",
            inputMedia: "",
        }
    },

    methods: {
        async postMedia(title, content) {
                await axios.post("api/auth/posts/media",   {
                title: title,
                content: content,
            })
        },
    },
}
</script>

<template>
    <div class="wrap-new-post">
                    <form class="wrap-form-post" @submit="postMedia(inputTitle, inputMedia)">

                        <h1>Nouvelle publication</h1>

                        <label for="">Titre de la publication</label>
                        <input type="text" placeholder="Title de la publication ..." id="inputTitle" maxlength="255" required v-model="inputTitle">

                        <label for="">lien media</label>
                        <input type="url" placeholder="votre media ..." id="inputMedia" required v-model="inputMedia">

                        <!-- <input type="submit" @click="createPostMedia" value="Envoyer votre publication"> -->
                        <input type="submit" value="Envoyer votre publication">
                    </form> 
                </div>
</template>

<style lang="css">

    .wrap-new-post {
        display: flex;
        justify-content: center;
    }

    .wrap-form-post  {
       display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
        width: 25em;
        padding: 1em;
        border: solid black 2px;
        border-radius: 1em;
    }

</style>