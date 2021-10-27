<script>
import axios from "axios";

export default {

    data()  {
        return {
            viewPosts: "",
            inputComment: [],
            postId: "",
            comments: {},
        }
    },

    created() {
        this.viewPostMedia()
    },

    methods: {
        async viewPostMedia() {
    
            const post = await axios.get("api/auth/posts/media");
                this.viewPosts = post.data.posts;   
                this.postId = post.data.posts.postId;
        },
            async sendComment(postId, content) {
               await axios.post(`api/auth/posts/${postId}/comments`, {
                    content: content,
                });
            },

            async getComments(postId) {
                const comments = await axios.get(`api/auth/posts/${postId}/comments`);
                this.comment = comments.data;
                console.log(comments.data);
            },
            async viewComments() {
                for (const post in this.viewPosts) {
                    console.log(post);
                const comments = await axios.get(`api/auth/posts/${post.postId}/comments`);
                console.log(comments);
                this.comments[post.postId] = comments;
                }
            }
    },
}
</script>

<template>
<div>

    <div v-for="(post, index) in this.viewPosts" :key="post.title">
        <h2>{{post.title}}</h2>
        <img v-bind:src="post.content" alt="">

        <form @submit.prevent>
            <label>Commentaire</label>
            <input type="text" placeholder="Votre commentaire" v-model="inputComment[index]">  
            <input type="submit" @click="sendComment(post.postId, inputComment[index])">
        </form>

    <button type="submit" @click="getComments(post.postId)">
       
        <p> commentaire :</p>
        <div  v-for="comment in getComments(post.postId, comments.content)" :key="comment">
            <p>{{this.comment}}</p>
        
        </div>
    </button>
    </div>

</div>
</template>

<style lang="css" scoped>

</style>