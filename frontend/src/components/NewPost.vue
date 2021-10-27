<script>
import axios from "axios";


export default {
    name: 'Post',

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
                    <form class="wrap-form-post">

                        <h1>Nouvelle publication</h1>

                        <label for="">Titre de la publication</label>
                        <input type="text" placeholder="Title de la publication ..." id="inputTitle" v-model="inputTitle">

                        <label for="">lien media</label>
                        <input type="url" placeholder="votre media ..." id="inputMedia" v-model="inputMedia">

                        <!-- <input type="submit" @click="createPostMedia" value="Envoyer votre publication"> -->
                        <input type="submit" @click="postMedia(inputTitle, inputMedia)" value="Envoyer votre publication">
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