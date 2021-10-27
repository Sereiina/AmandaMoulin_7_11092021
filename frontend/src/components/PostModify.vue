<script>
import axios from 'axios'
export default {
    name: "PostModify",
    props: ['postId'],
    data() {
        return {
            ModifTitle:"",
            ModifMedia:"",
            active: "",    
        }
    },
    methods: {
        async postModify(title, content) {
            await axios.put(`api/auth/posts/media/${this.postId}`, {
                title: title,
                content: content,
            })
            window.location.reload();

        }
    },

}
</script>

<template>
<div>
    <button @click="active = !active">
        Modifier
    </button>
        <form v-show="active" @submit="postModify(ModifTitle, ModifMedia)">
            <label for="">Titre de la publication</label>
            <input type="text" placeholder="Title de la publication" id="ModifTitle" required v-model="ModifTitle">

            <label for="">lien media</label>
            <input type="url" placeholder="votre media" id="ModifMedia" required v-model="ModifMedia">

            <input type="submit"  value="Modifier votre publication">

        </form>
</div>
</template>

<style lang="css" scoped>

</style>