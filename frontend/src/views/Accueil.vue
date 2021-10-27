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
        }
    },
}

</script>

<template>

    <section>
            <!-- Menu de navigation -->
            <MenuNav />
                
                <!-- Envoie d'un nouveau post -->
                    <NewPost />            
                <!-- affichage de tous les posts -->
               
                <PostsList />
                <!-- envoi d'un commentaire -->


    </section>

</template>

<style lang="css" scoped>
    
</style>