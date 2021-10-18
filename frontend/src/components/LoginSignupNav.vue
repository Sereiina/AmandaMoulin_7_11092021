<script>




</script>


<template>
    <nav>
        <div class="wrap-nav">
                <img class="logo-nav" src="../assets/icon-left-font-monochrome-black.png" alt="">
                <label class="nav-toggle" for="toggle">☰</label>
                <input type="checkbox" name="" id="toggle">
            <div class="wrap-nav-link">
                <a class="nav-hide" href="/signup"> Inscription</a>
                <a class="nav-hide" href="/login">Connexion</a>
            </div>
        </div>
    </nav>

</template>

<style lang="css">

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
    .wrap-nav-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
        }
    .wrap-nav {
        height: 10em;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        padding-right: 3em;
        padding-left: 3em;
    }
    .logo-nav {
        width: 30%;
    }
</style>