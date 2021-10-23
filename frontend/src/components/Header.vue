<template>
    <nav>
        <div class="wrap-header">
            <img class="logo-nav" src="../assets/icon-left-font-monochrome-black.png" alt="">
            <label class="nav-toggle" for="toggle">☰</label>
            <input type="checkbox" name="" id="toggle">
            <div class="wrap-nav-link">
            <a href="./accueil">Accueil</a>
            <a href="/profil">Profil</a>
            <a href="/login">Se déconnecter</a>
            </div>
        </div>
    </nav>
</template>

<style lang="css" scoped>

    .wrap-header {
        height: 10em;
         padding-right: 3em;
        padding-left: 3em;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .logo-nav {
        width: 30%;
    }


.nav-toggle, #toggle {
        display: none;
    }

    @media all and (max-width: 991px) {
        
       a {
           height: 60px;
       }

        nav .wrap-nav-link {
            display: none;
            flex-direction: column;
            height: 220px;
        }


       .nav-toggle {
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-size: 40px;
            cursor: pointer;
       }

        #toggle:checked + .wrap-nav-link {
            display: flex;
            
        }
    }

    a {
        text-decoration: none;
        font-size: 1.2em;
        color: black;
        margin-left: 1.5em;
    }

</style>