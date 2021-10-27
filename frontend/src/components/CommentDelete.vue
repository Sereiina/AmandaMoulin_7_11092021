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

        <button @click="commentDelete">
            <p>Supprimer</p>
        </button>

    </div>
</template>