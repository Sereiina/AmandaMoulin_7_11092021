<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.common = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

 import MenuNav from '../components/Header.vue';
 import NewPost from '../components/NewPost.vue';
 import PostsList from '../components/PostsList.vue';

export default {
    name: 'Menu',
    components: {
        MenuNav,
        NewPost,
        PostsList,
    },

    data() {
        return {
            headers: "",
            nom: "",
            prenom: "",
            createdAt: "",
            
            
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
        
    }

}

</script>

<template>

    <section>
            <!-- Menu de navigation -->
            <MenuNav />
            <!-- Nom & prenom de l'utisateur -->
                <div class="wrap-user-info ">
                    <div class="name">  <p>{{this.nom}} {{this.prenom}}</p> </div>
                    <div class="date">  {{ this.createdAt}}</div>
                </div>
                <!-- Envoie d'un nouveau post -->
                <div  class="wrapper-post font-accueil">
                    <NewPost />
                </div>
            
                <!-- affichage de tous les posts -->
               
                <PostsList />
                <!-- envoi d'un commentaire -->


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

    

</style>