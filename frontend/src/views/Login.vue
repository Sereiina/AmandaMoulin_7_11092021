<script>
import LoginSignupNav from '../components/LoginSignupNav.vue'
import axios from "axios";
import router from "../router"

export default {
    name: 'Signup',
    components: {
        LoginSignupNav
    },

    data() {
        return {
            inputEmail: "",
            inputPassword: ""
        }
    },
    methods: {

        async login() {

            const axiosRes = await axios.post("http://localhost:3000/api/auth/login", {
                email: this.inputEmail,
                password: this.inputPassword
            })
            sessionStorage.setItem("token", axiosRes.data.token );
            // localStorage.setItem("token", axiosRes.data.nom)
            await router.push({ path: '/accueil'});
        }
    }
}
</script>


<template>
    <section>
        <LoginSignupNav />

                <form @submit.prevent="login">
            <h1 class="font-center">Connexion </h1>
            
            <div class="wrap-form">
                <label  for=""></label>
                <input class="form-margin font-bold" type="email" placeholder="Adresse email" v-model="inputEmail">
            </div>

            <div class="wrap-form">
                <label class="" for=""></label>
                <input class="form-margin font-bold" type="password" placeholder="Mot de passe" v-model="inputPassword">
            </div>

            <div class="wrap-form">
                <input class="form-margin" type="submit" value="Se connecter">
            </div>

        </form>
    </section>
</template>

<style lang="css" scoped>

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