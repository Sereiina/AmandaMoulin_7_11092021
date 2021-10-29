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
        <label>Envoyer un commentaire :</label>
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
    width: 89%;
    padding: 0.5em;
    border: black 1px solid;
        margin-bottom: 1em;
        margin-top: 0.5em;

    }
    .comment-input {
        width: 87%;
        padding: 0.5em;
        background-color: #ffd7d7;
        border: black 2px solid;
        margin-bottom: 2em;
    }
</style>