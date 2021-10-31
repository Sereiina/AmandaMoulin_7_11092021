<script>
import axios from "axios";

export default {
    name: "ProfilDelete",
    data() {
        return {
            confirmeDelete: ""
        }
    },
    methods: {
            async commentDelete() {
                await axios.delete("api/auth/profil");
                sessionStorage.removeItem("token");

                window.location.reload();
            },
            clearToken() {
            }
    },
    }
</script>

<template>
    <div class="profil-delete">
        <button class="profil-button-delete" @click="confirmeDelete = !confirmeDelete"   > Supprimer le compte </button>
        <button class="profil-button-confirmationDelete" v-show="confirmeDelete"  @click="commentDelete"> Attention : Voulez vous vraiment supprimer votre compte ?</button>
        
    </div>
</template>

<style>
    .profil-delete {
       display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: nowrap;
    }
    .profil-button-delete {
        width: 64%;
        margin-bottom: 2em;
        padding: 0.5em;
        cursor: pointer;
        border: solid 1px black;
        background-color: #ffd7d7;
    }
    .profil-button-delete:hover {
        background-color: #fcc0c0;
        font-weight: 600;
        border: solid 1px black;
    }
    .profil-button-confirmationDelete {
        width: 24%;
        margin-bottom: 2em;
        padding: 0.7em;
        cursor: pointer;
        border: solid 1px black;
        background-color: #ffd7d7;
    }
    .profil-button-confirmationDelete:hover {
        background-color: rgb(209, 29, 29) ;
        color: white;
    }

    @media screen and (min-width: 750px) {
        .profil-button-delete {
            width: 24%;

        }

    }
</style>