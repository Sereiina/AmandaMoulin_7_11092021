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
    <div>
        <button @click="commentDelete"> ERASE </button>
        
    </div>
</template>