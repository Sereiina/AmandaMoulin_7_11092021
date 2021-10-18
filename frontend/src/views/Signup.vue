<script>

import LoginSignupNav from '../components/LoginSignupNav.vue'

export default {
    name: 'Signup',
    components: {
        LoginSignupNav
    }
}  
 

</script>


<template>

    <section>
           <LoginSignupNav />
        <form action="">
            <h1 class="font-center">Inscription </h1>
            <div class="wrap-form-double">
                <label for=""></label>
                <input class="form-margin font-bold" type="text" placeholder="Nom">
                 <label for=""></label>
                <input class="form-margin font-bold" type="text" placeholder="Prénom">
            </div>
            <div class="wrap-form">
                <label  for=""></label>
                <input class="form-margin font-bold" type="email" placeholder="Adresse email">
            </div>

            <div class="wrap-form">
                <label class="" for=""></label>
                <input class="form-margin font-bold" type="password" placeholder="Mot de passe">
            </div>

            <div class="wrap-form">
            <input class="form-margin" type="button" value="S'inscrire">

            </div>

        </form>
    </section>

</template>



<style lang="css">

    .wrap-form-double {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .wrap-form {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
    }
    .form-margin {
        margin-top: 2em;
        width: 50%;
        height: 3em;
    }
    .font-center {
        text-align: center;
    }

</style>