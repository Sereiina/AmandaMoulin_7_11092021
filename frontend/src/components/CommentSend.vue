<script>
import axios from "axios";

export default {
    name: 'commentSend',
    props: ['postId'],
    data()  {
        return {
            inputComment: ""
        }
    },
    methods: {
        async sendComment(postId, content) {
            await axios.post(`api/auth/posts/${postId}/comments`, {
                content: content,
            });
            window.location.reload();
        },
    },
}
</script>

<template>
    <form class="wrap-form-comment" @submit="sendComment(postId, inputComment)">
        <label class="comment-text">Envoyer un commentaire :</label>
        <input class="comment-form" type="text" placeholder="Votre commentaire" maxlength="255" required v-model="inputComment">  
        <input class="comment-input" type="submit" >
    </form>
</template>

<style>

    .wrap-form-comment {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }
    .comment-form {
        width: 100%;
        min-height: 40px;
        padding:0;
        margin-bottom: 1em;
        margin-top: 0.5em;
    }
    .comment-text {
        color: white;
    }
    .comment-input {
        width: 100%;
        min-height: 40px;
        background-color: #ffd7d7;
        margin-bottom: 2em;
        cursor: pointer;
        padding: 0;
        border-width:0;
    }
</style>