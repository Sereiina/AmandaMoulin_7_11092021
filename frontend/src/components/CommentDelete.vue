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
    <div>
        <div class=""> 
            <i @click="commentDelete" class="fas fa-trash cross"></i>
        </div>
    </div>
</template>

<style>
 .cross {
    transition: 0.3s ease;
     font-size: 1.1em;
 }
 .cross:hover {
     color: red;
     cursor: pointer;
     transition: 0.3s ease;
}
</style>