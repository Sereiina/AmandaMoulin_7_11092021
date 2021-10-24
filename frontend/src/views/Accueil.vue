<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.common = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

 import MenuNav from '../components/Header.vue'

export default {
    name: 'Menu',
    components: {
        MenuNav
    },

    data() {
        return {
            headers: "",
            nom: "",
            prenom: "",
            createdAt: "",
            inputTitle: "",
            inputMedia: "",
            viewPosts: "",
            inputComment:"",
            postId: "",
        }
    },

    created() {
        this.userInfo(),
        this.viewPostMedia()
    },

    methods: {

        async userInfo() {
            const user = await axios.get("api/auth/profil",{
            })
                this.nom = user.data.nom;
                this.prenom = user.data.prenom;
                this.createdAt = user.data.createdAt;
        }, 

        // async createPostMedia() {
        //         await axios.post("api/auth/posts/media",   {
        //         content: this.inputMedia,
        //         title: this.inputTitle,
        //     })
        // },
        async postMedia(title, content) {
                await axios.post("api/auth/posts/media",   {
                title: title,
                content: content,
            })
        },

        async viewPostMedia() {

           const post = await axios.get("api/auth/posts/media")
            this.viewPosts = post.data.posts;
            console.log(post);
        },
        async createComment() {
            
            await axios.post(`api/auth/posts/${this.postId}/comments`, {
                content: this.Inputcomment,
            })
        },
    }
 
}

</script>

<template>

    <section>
            <MenuNav />

            

            <div class="wrapper-post font-accueil">

                <div class="wrap-user-info">
                    <div class="name">  <p>{{this.nom}} {{this.prenom}}</p> </div>
                    <div class="date">  {{ this.createdAt}}</div>
                </div>

                <div class="">
                    <form class="wrap-form-post">

                        <h1>Nouvelle publication</h1>

                        <label for="">Titre de la publication</label>
                        <input type="text" placeholder="Title de la publication ..." id="inputTitle" v-model="inputTitle">

                        <label for="">lien media</label>
                        <input type="url" placeholder="votre media ..." id="inputMedia" v-model="inputMedia">

                        <!-- <input type="submit" @click="createPostMedia" value="Envoyer votre publication"> -->
                        <input type="submit" @click="postMedia(inputTitle, inputMedia)" value="Envoyer votre publication2">
                    </form> 
                </div>


                <div class="comments"></div>

        </div>
            <div v-for="post in this.viewPosts" :key="post.title">
                <h2>{{post.title}}</h2>
            <img v-bind:src="post.content" alt="">
        </div>

    </section>

</template>

<style lang="css" scoped>

    .font-accueil {
        font-size: 1.2em;
        text-align: justify;
        padding: 0.7em;
    }
    .accueil-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }


    .wrapper-post {
        border: black 1px solid;
        width: 70%;
    }

    .wrap-form-post  {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

</style>