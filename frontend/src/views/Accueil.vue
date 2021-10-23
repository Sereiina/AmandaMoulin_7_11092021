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
        }
    },

    created() {
        this.userInfo()
    },

    methods: {

        async userInfo() {
            const user = await axios.get("api/auth/profil",{
            })
                this.nom = user.data.nom;
                this.prenom = user.data.prenom;
                this.createdAt = user.data.createdAt;
        }, 

        async postMedia() {
                await axios.post("api/auth/posts/media",   {
                content: this.inputMedia,
                title: this.inputTitle,
            })
        }
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

                        <input type="submit" @click="postMedia" value="Envoyer votre publication">
                    </form> 
                </div>

                <div class="content-text">
                    <!-- <p>{{this.title}} </p> -->
                </div>
                <!-- <div class="content-img">{{this.content}}</div> -->

                <div class="comments"></div>

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