<script>
import axios from "axios";

export default {
    name: "PostDelete",
    props: ['postId'],

    methods: {
        async postDelete() {
            await axios.delete(`api/auth/posts/media/${this.postId}`)
            window.location.reload();
        }
    }
}
</script>

<template>
    <div>
        <i @click="postDelete" class="fas fa-times  cross"></i>
    </div>
</template>