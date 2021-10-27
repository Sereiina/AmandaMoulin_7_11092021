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
    <div v-show="active">
        <label for="">Titre de la publication</label>
            <input type="text" placeholder="Title de la publication" id="ModifTitle" v-model="ModifTitle">

            <label for="">lien media</label>
            <input type="url" placeholder="votre media" id="ModifMedia" v-model="ModifMedia">

            <input type="submit" @click="postModify(ModifTitle, ModifMedia)" value="Modifier votre publication">
    </div>
</div>
</template>

<style lang="css" scoped>

</style>