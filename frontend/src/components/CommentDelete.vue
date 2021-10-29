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
            <i @click="commentDelete" class="fas fa-times cross"> supprimer</i>
        </div>
    </div>
</template>

<style>
 .cross {

     font-size: 1.1em;
 }
 .cross:hover {
     color: red;
     cursor: pointer;
 }
</style>