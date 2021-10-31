<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.headers.common = {
  Authorization: "Bearer " + sessionStorage.getItem("token"),
};

import MenuNav from "../components/Header.vue";
import ProfilUser from "../components/ProfilUser.vue";
import DeleteProfil from "../components/ProfilDelete.vue";
export default {
  name: "Profil",
  components: {
    MenuNav,
    ProfilUser,
    DeleteProfil,
  },
};
</script>

<template>
  <section>
    <MenuNav />

    <ProfilUser />

    <DeleteProfil />
  </section>
</template>