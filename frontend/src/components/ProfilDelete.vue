<script>
import axios from "axios";

export default {
    name: "ProfilDelete",
    
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
    <div class="button-profil-delete">
        <button  @click="commentDelete"> Supprimer le compte </button>
        
    </div>
</template>

<style>
    .button-profil-delete {
        text-align: center;
    }
</style>