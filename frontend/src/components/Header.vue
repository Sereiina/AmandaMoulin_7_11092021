<script>
export default {

    data() {
        return {
            navigation: "",
        }
    },

    methods: {
        clearToken() {
            sessionStorage.removeItem("token");
        }
    }
    
}
</script>




<template>
    <nav>
        <div class="wrap-header">
            <img class="logo-nav" src="../assets/icon-left-font-monochrome-black.png" alt="">
            
            <div class="wrap-nav-link">
                <!-- <label @click="navigation = !navigation" class="nav-toggle" >☰</label> -->
                <a  href="./accueil">Accueil</a>
                <a  href="/profil">Profil</a>
                <a  @click="clearToken" href="/login">Se déconnecter</a>
            </div>
        </div>
    </nav>
</template>

<style lang="css">
    
    a {
    text-decoration: none;
    font-size: 1em;
    padding: 0.5em;
    color: black;
    }

    .wrap-header {
        height: 10em;
        padding-right: 1em;
        padding-left: 1em;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        background-color: #ffd7d7;
    }

    .logo-nav {
        width: 50%;
    }
    .wrap-nav-link {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-wrap: nowrap;
    }
       

    .nav-toggle {
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
        cursor: pointer;
    }

@media screen and (min-width: 750px) { 
    
    a {
         text-decoration: none;
        font-size: 1.2em;
        color: black;
        margin-left: 1.5em;
        display:inline;
    }
    .logo-nav {
        width: 30%;
    }
     
    .wrap-nav-link {
        flex-direction: row;
    }
    .wrap-header {
        padding-right: 3em ;
        padding-left: 3em;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;

    }
    
}

</style>