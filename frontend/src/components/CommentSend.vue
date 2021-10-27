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
    <form @submit="sendComment(postId, inputComment)">
        <label>Commentaire</label>
        <input type="text" placeholder="Votre commentaire" required v-model="inputComment">  
        <input type="submit" >
    </form>
</template>