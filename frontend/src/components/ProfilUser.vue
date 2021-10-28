<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.common = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

export default {
    name: 'ProfilUser',
    data() {
        return {
            nom: "",
            prenom: "",
            email:"",
        }
    },
    created() {
        this.profil();
    },

    methods: {
        async profil() {
            const profil = await axios.get("api/auth/profil")
            this.nom = profil.data.nom;
            this.prenom = profil.data.prenom;
            this.email = profil.data.email;
        }
    }
} 

</script>

<template>
    <div class="wrap-profil">
        
        <h1>Information utilisateur</h1>
        <div>
            <p>Nom : {{this.nom}}</p>
            <p>Prenom : {{this.prenom}}</p>
            <p>Adresse email : {{this.email}}</p>
        </div>

    
    </div>
</template>

<style>
    .wrap-profil {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
    }
</style>