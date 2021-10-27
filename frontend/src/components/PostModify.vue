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
    <div class="button-modify">
        <button @click="active = !active">
            Modifier
        </button>
    </div> 
    <div class="wrapper-form" >
        <form class="wrap-post-modify" v-show="active" @submit="postModify(ModifTitle, ModifMedia)">
            <label for="">Titre de la publication :</label>
            <input type="text" placeholder="Title de la publication" id="ModifTitle" maxlength="255" required v-model="ModifTitle">

            <label for="">lien media :</label>
            <input type="url" placeholder="votre media" id="ModifMedia" required v-model="ModifMedia">

            <input type="submit"  value="Modifier votre publication">
        </form>
    </div>
</div>
</template>

<style lang="css">

    .button-modify {
        align-content: center;
        text-align: center;
    }

    .wrap-post-modify {
        display: flex;
        border: black 1px solid;
        flex-wrap: nowrap;
        width: 12em;
        flex-direction: column;
        align-items: center;
        font-size: 1.4em;
    }
    

    @media screen and (min-width: 750px) {
    .wrap-post-modify {
        width: 100%;
        width: 13em;
        font-size: 1.5em;
    }
    

}
</style>