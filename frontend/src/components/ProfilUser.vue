<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.common = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

import Modal from "../components/Modal.vue";

export default {
    name: 'ProfilUser',
    props: ['post'],

    components: {
        Modal,
    },
    data() {
        return {
            nom: "",
            inputNom: "",
            prenom: "",
            inputPrenom: "",
            email:"",
            inputEmail: "",
            oldPassword: "",
            newPassword: "",
            active: false,
            nameEditForm: false,
            emailEditForm: false,
            passwordEditForm: false,
            confirmationPassword: "",
            passwordError: false,
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
        },

        // async modifyProfil(inputNom,inputPrenom,inputEmail,oldPassword,newPassword) {
        //     if (this.newPassword === this.confirmationPassword) {
        //         await axios.put("api/auth/profil", {
        //             nom: inputNom,
        //             prenom: inputPrenom,
        //             email: inputEmail,
        //             oldPassword:oldPassword,
        //             newPassword: newPassword,
        //         })
        //     }
        //     else {
        //         console.log('nouveau mot de passe non identique');
        //     }
        // },

        async editName(inputNom, inputPrenom) {
            await axios.put("api/auth/profil", {
                nom: inputNom,
                prenom: inputPrenom
            })
        },
        
        async editMail(inputEmail) {
            await axios.put("api/auth/profil", {
                email: inputEmail
            });
        },

        async editPassword(oldPassword, newPassword, confirmationPassword) {
            if (newPassword === confirmationPassword) {
                await axios.put("api/auth/profil", {
                    oldPassword: oldPassword,
                    newPassword: newPassword,
                })
            } else {
                console.log("password doesnt match")
                this.passwordError = true
            }
        },
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


    <button @click="nameEditForm = !nameEditForm">Changer mon nom</button>
    <Modal v-show="nameEditForm" @close="nameEditForm = false">
    <template v-slot:header>
       Changez vos informations
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit="editName(inputNom,inputPrenom)">
            <label for="">Votre nom :</label>
            <input type="text" placeholder="nom" v-model="inputNom">

            <label for="">Votre prenom :</label>
            <input type="text" placeholder="prenom" v-model="inputPrenom">
            <input type="submit" value="Changer ses informations">
        </form>
    </template>

    <template v-slot:footer>
    </template>
    </Modal>

    <button @click="emailEditForm = !emailEditForm">Changer mon email</button>
    <Modal v-show="emailEditForm" @close="emailEditForm = false">
    <template v-slot:header>
       Changer mon email
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit="editMail(inputEmail)">
            <label for="">Votre email :</label>
            <input type="email" placeholder="email" v-model="inputEmail">
            <input type="submit" value="Changer ses informations">
        </form>
    </template>

    <template v-slot:footer>
    </template>
    </Modal>


    <button @click="passwordEditForm = !passwordEditForm">Changer mon mot de passe</button>
    <Modal v-show="passwordEditForm" @close="passwordEditForm = false">
    <template v-slot:header>
       Changer mon mot de passe
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit.prevent="editPassword(oldPassword, newPassword, confirmationPassword)">
            <label for="">Votre ancien mot de passe :</label>
            <input type="password" placeholder="mot de passe" v-model="oldPassword">
            <label for="">nouveau mot de passe :</label>
            <input type="password" placeholder="nouveau mot de passe" v-model="newPassword">
            <label for="">confirmation mot de passe :</label>
            <input type="password" placeholder="confirmer mot de passe" v-model="confirmationPassword">
            <input type="submit" value="Changer ses informations">
        </form>
    </template>

    <template v-slot:footer>
        <p v-show="passwordError">le nouveau mot de passe n'est pas identique</p>
    </template>
    </Modal>


    <!-- <button @click="active = !active">
        Changer ses informations personnelles
    </button> -->
<!-- v-model -->
        <!-- <form class="profil-modify" v-show="active" @submit="modifyProfil(inputNom,inputPrenom,inputEmail,oldPassword,newPassword)">

            <label for="">Votre nom :</label>
            <input type="text" placeholder="nom" v-model="inputNom">

            <label for="">Votre prenom :</label>
            <input type="text" placeholder="prenom" v-model="inputPrenom">

            <label for="">Votre email :</label>
            <input type="email" placeholder="email" v-model="inputEmail">

            <label for="">Votre ancien mot de passe :</label>
            <input type="password" placeholder="mot de passe" v-model="oldPassword">
            <label for="">nouveau mot de passe :</label>
            <input type="password" placeholder="nouveau mot de passe" v-model="newPassword">
            <label for="">confirmation mot de passe :</label>
            <input type="password" placeholder="confirmer mot de passe" v-model="confirmationPassword">

            <input type="submit" value="Changer ses informations">
        </form> -->



    </div>
</template>

<style>
    .wrap-profil {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
    }
    .profil-modify {
        align-self: center;
        display: flex;
        flex-direction: column;
        max-width: 640px;
        align-items: center;
    }
</style>