<script>
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.common = {'Authorization': 'Bearer ' + sessionStorage.getItem('token')};

import Modal from "../components/Modal.vue";

export default {
    name: 'ProfilUser',

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
            this.inputNom = this.nom;
            this.inputPrenom = this.prenom;
            this.inputEmail = this.email;
        },

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
        <div class="profil-user-informations">
            <p><b>Nom :</b> {{this.nom}}</p>
            <p><b>Prenom :</b> {{this.prenom}}</p>
            <p><b>Adresse email :</b> {{this.email}}</p>
        </div>

    <button class="profil-button-modify" @click="nameEditForm = !nameEditForm">Changer mon nom</button>
    <Modal v-show="nameEditForm" @close="nameEditForm = false">
    <template v-slot:header>
       Changez vos informations
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit="editName(inputNom,inputPrenom)">
            <label bold-text for="">Votre nom : </label>
            <input class="profil-input" type="text" required v-model="inputNom">

            <label bold-text for="">Votre prenom :</label>
            <input class="profil-input" type="text" placeholder="prenom" v-model="inputPrenom" required>
            <input class="profil-submit"  type="submit" value="Changer ses informations">
        </form>
    </template>

    <template v-slot:footer>
    </template>
    </Modal>

    <button class="profil-button-modify" @click="emailEditForm = !emailEditForm">Changer mon email</button>
    <Modal v-show="emailEditForm" @close="emailEditForm = false">
    <template v-slot:header>
       Changer mon email
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit="editMail(inputEmail)">
            <label  for="">Votre email :</label>
            <input class="profil-input" type="email" placeholder="email" v-model="inputEmail">
            <input type="submit" value="Changer ses informations" required>
        </form>
    </template>

    <template v-slot:footer>
    </template>
    </Modal>


    <button class="profil-button-modify" @click="passwordEditForm = !passwordEditForm">Changer mon mot de passe</button>
    <Modal v-show="passwordEditForm" @close="passwordEditForm = false">
    <template v-slot:header>
       Changer mon mot de passe
    </template>

    <template v-slot:body>
        <form class="profil-modify" @submit.prevent="editPassword(oldPassword, newPassword, confirmationPassword)">
            <label  for="">Votre ancien mot de passe :</label>
            <input class="profil-input" type="password" placeholder="mot de passe" v-model="oldPassword" required>
            <label for="">nouveau mot de passe :</label>
            <input class="profil-input" type="password" placeholder="nouveau mot de passe" v-model="newPassword" required>
            <label for="">confirmation mot de passe :</label>
            <input class="profil-input" type="password" placeholder="confirmer mot de passe" v-model="confirmationPassword" required>
            <input type="submit" value="Changer ses informations">
        </form>
    </template>

    <template v-slot:footer>
        <p v-show="passwordError">le nouveau mot de passe n'est pas identique</p>
    </template>
    </Modal>

    </div>
</template>

<style>
    .modal {
        width: 50%;
    }
    .modal-header {
        color: black;
        background-color: #ffd7d7;
        border-bottom: black 1px solid;
        display: flex;
        align-items: center;
    }
    .modal-wrapper {
        background-color: #ffd7d7;

    }
    .wrap-profil {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        text-align: center;
        align-items: center;
    }
    .profil-user-informations {
        border: 3px solid rgb(0, 0, 0);
        margin-bottom: 2em;
        padding: 1em;
        border-radius: 2em;
        background-color: #fcc0c0;
    }
    .profil-modify {
        align-self: center;
        display: flex;
        flex-direction: column;
        max-width: 640px;
        align-items: center;
    }
    .profil-input {
        width: 80%;
        height: 2em;
        margin-bottom: 2em;
        padding: 0.5em;
    }
    .profil-submit {
        width: 64%;
        margin-bottom: 2em;
        padding: 0.5em;
        cursor: pointer;
        border: solid 1px black;
        background-color: #fcc0c0;
    }
    .profil-submit:hover {
        font-weight: 600;
        border: solid 1px black;
    }
    .profil-button-modify {
        width: 64%;
        margin-bottom: 2em;
        padding: 0.7em;
        cursor: pointer;
        border: solid 1px black;
        background-color: #ffd7d7;
    }
    .profil-button-modify:hover {
        background-color: #fcc0c0;
        font-weight: 600;
        border: solid 1px black;
    }
    bold-text {
    font-weight: 600;
    }
     @media screen and (min-width: 750px) {
       .profil-button-modify {
        width: 24%;

       }
       .profil-user-informations {
           padding: 2em;
       }
    }
</style>