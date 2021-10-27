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
        },
    },
}
</script>

<template>
    <form @submit.prevent>
        <label>Commentaire</label>
        <input type="text" placeholder="Votre commentaire" v-model="inputComment">  
        <input type="submit" @click="sendComment(postId, inputComment)">
    </form>
</template>