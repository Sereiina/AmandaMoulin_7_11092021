<script>
import axios from "axios";

export default {
    name: "PostDelete",
    props: ['postId'],

    methods: {
        async postDelete() {
            await axios.delete(`api/auth/posts/media/${this.postId}`)
            console.log('kek');
            window.location.reload();
        }
    }
}
</script>

<template>
    <div>

        <button @click="postDelete" class="button-delete">
            Effacer la publication
        </button>
        
    </div>
</template>

<style>
    .button-delete {
        margin-top: 2em;
        align-content: center;
        text-align: center;
        width: 12em;
        padding: 0.5em;
        font-size: 17px;
    }
</style>