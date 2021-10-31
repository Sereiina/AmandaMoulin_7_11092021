<script>
import axios from "axios";

export default {
    name: "CommentDelete",
    props: ['postId','commentId'],

    methods: {
        async commentDelete() {
            await axios.delete(`api/auth/posts/${this.postId}/comments/${this.commentId}`)
            window.location.reload();
        }
    }
}
</script>

<template>
    <main>
        <div>
            <i @click="commentDelete" class="fas fa-trash cross"></i>
        </div>
    </main>
</template>

<style>
 .cross {
    transition: 0.3s ease;
     font-size: 1.1em;
 }
 .cross:hover {
     cursor: pointer;
     color: red;
     transition: 0.3s ease;
}
</style>