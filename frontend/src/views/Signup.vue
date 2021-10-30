<script>
import LoginSignupNav from '../components/LoginSignupNav.vue'
import axios from "axios";
import router from "../router"

export default {
    name: 'Signup',

    components: {
        LoginSignupNav,
    },

    data() {
        return {
                inputNom: "",
                inputPrenom: "",
                inputEmail: "",
                inputPassword: "",
                error: ""
        }
    },

     methods: {

         
         async signup() {
             
             await axios.post("http://localhost:3000/api/auth/signup", {
                 nom: this.inputNom,
                 prenom: this.inputPrenom,
                 email: this.inputEmail,
                 password: this.inputPassword,
             })
                console.log("kek");
                await router.push({ path: '/login'});

        }
    }
}


//inscription

</script>


<template>

    <section>
           <LoginSignupNav />
        <form @submit.prevent="signup">
            <h1 class="font-center">Inscription </h1>
            <div class="wrap-form-double">
                <label for="nom"></label> 
                <input class="form-margin font-bold" type="text" placeholder="Nom" id="inputNom" v-model="inputNom">

                 <label for="prenom"></label>
                <input class="form-margin font-bold" type="text" placeholder="Prénom" id="inputPrenom" v-model="inputPrenom">
            </div>
            <div class="wrap-form">
                <label  for="email"></label>
                <input class="form-margin font-bold" type="email" placeholder="Adresse email" id="inputEmail" v-model="inputEmail">
            </div>

            <div class="wrap-form">
                <label for="password"></label>
                <input class="form-margin font-bold" type="password" placeholder="Mot de passe" id="inputPassword" v-model="inputPassword">
            </div>

            <div class="wrap-form">
            <input @click="error = true" class="form-margin" type="submit" value="S'inscrire" >
            </div>
            <p v-show="error">Mot de passe invalide ou email déjà existant, le mot de passe doit contenir 1 chiffre minimum
                    <br> / 1 miniscule minimum
                    <br>  / 1 majuscule minimum / 
                    <br>  1 caractère spécial minimum / 
                    <br>  8 caractères minimum
            </p> 

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