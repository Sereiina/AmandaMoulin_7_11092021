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
    <div>
        <button class="button-modify" @click="active = !active">
            Modifier
        </button>
    </div> 
    <div class="wrapper-form" >
        <form class="wrap-post-modify" v-show="active" @submit="postModify(ModifTitle, ModifMedia)">
            <label for="">Titre de la publication :</label>
            <input class="modify-post-form" type="text" placeholder="Title de la publication" id="ModifTitle" maxlength="255" required v-model="ModifTitle">

            <label for="">Url de votre publication :</label>
            <input class="modify-post-form" type="url" placeholder="votre media" id="ModifMedia" required v-model="ModifMedia">

            <input class="modify-post-input" type="submit"  value="Modifier votre publication">
        </form>
    </div>
</div>
</template>

<style lang="css">

    .button-modify {
        align-content: center;
        text-align: center;
        width: 6em;
        padding: 0.5em;
        font-size: 17px;
        cursor: pointer;

    }

    .wrap-post-modify {
        display: flex;
        border: black 2px solid;
        flex-wrap: nowrap;
        width: 12em;
        flex-direction: column;
        align-items: center;
        font-size: 1.4em;
        background-color: #ffd7d7;
        padding: 1em;
        border-radius: 1em ;
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