<script>

 import MenuNav from '../components/Header.vue'

export default {
    name: 'Menu',
    components: {
        MenuNav
    }
} 

</script>

<template>
    <section>
        <MenuNav />

        <div class="font-accueil">

            <h1>Bienvenue sur le réseau de Groupomania</h1>

            <h2>Fonctionnement du réseau :</h2>
            <p> le réseau contient 2 forums distinct, l'un pour vos interactions écrites et le
                second pour partager des images et des gifs. Vous pouvez suivre les différents 
                liens ci dessous pour les retrouver.
                <br><i>Attention : vos interactions pourront être modérer par votre chargé-e de communication,
                    et pourras supprimer vos posts ou commentaires si il ou elle juge cela necessaire. </i>
            </p>

        </div>

            
        <div class="accueil-link">
            <a href="/forum-text"> Forum textuel :</a>
            
            <a href="/forum-media"> Forum Media :</a>
        </div>
    </section>
</template>

<style>

.font-accueil {
    font-size: 1.3em;
    text-align: justify;
    padding: 0.7em;
}
    .accueil-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }
</style>