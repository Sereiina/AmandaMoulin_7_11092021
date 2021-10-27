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
            <i @click="commentDelete" class="fas fa-times cross"></i>
        </div>
    </div>
</template>

<style>
 .cross {

     font-size: 1.8em;
 }
 .cross:hover {
     color: red;
 }
</style>