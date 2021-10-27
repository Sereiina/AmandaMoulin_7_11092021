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
    <div class="">
                    <form class="wrap-form-post" @submit="postMedia(inputTitle, inputMedia)">

                        <h1>Nouvelle publication</h1>

                        <label for="">Titre de la publication</label>
                        <input type="text" placeholder="Title de la publication ..." id="inputTitle" required v-model="inputTitle">

                        <label for="">lien media</label>
                        <input type="url" placeholder="votre media ..." id="inputMedia" required v-model="inputMedia">

                        <!-- <input type="submit" @click="createPostMedia" value="Envoyer votre publication"> -->
                        <input type="submit" value="Envoyer votre publication">
                    </form> 
                </div>
</template>

<style lang="css" scoped>

    .wrap-form-post  {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

</style>