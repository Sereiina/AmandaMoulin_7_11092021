<script>
import axios from "axios";
import Modal from "../components/Modal.vue";

export default {
  name: "ProfilDelete",

  components: {
    Modal,
  },
  data() {
    return {
      confirmDelete: "",
    };
  },
  methods: {
    async profileDelete() {
      await axios.delete("api/auth/profil");
      sessionStorage.removeItem("token");
      window.location.reload();
    },
  },
};
</script>

<template>
  <div class="profil-delete">
    <button
      class="profil-button-delete"
      @click="confirmDelete = !confirmDelete"
    >
      Supprimer le compte
    </button>
    <Modal v-show="confirmDelete" @close="confirmDelete = false">
      <template v-slot:header> Voulez vous supprimer votre compte ? </template>

      <template v-slot:body>
        <div class="wrap-button-delete">
          <button
            class="profil-button-confirmationDelete"
            @click="profileDelete"
          >
            Oui !
          </button>
          <button
            class="profil-button-confirmationDelete"
            @click="confirmDelete = false"
          >
            Non !
          </button>
        </div>
      </template>

      <template v-slot:footer> </template>
    </Modal>
  </div>
</template>

<style>
.modal-footer {
  padding: 0;
}
.wrap-button-delete {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.profil-delete {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}
.profil-button-delete {
  width: 64%;
  margin-bottom: 2em;
  padding: 0.5em;
  cursor: pointer;
  border: solid 1px black;
  background-color: #ffd7d7;
}
.profil-button-delete:hover {
  background-color: #fcc0c0;
  font-weight: 600;
  border: solid 1px black;
}
.profil-button-confirmationDelete {
  margin-bottom: 2em;
  padding: 0.7em;
  cursor: pointer;
  border: solid 1px black;
  background-color: #ffd7d7;
  width: 15%;
}
.profil-button-confirmationDelete:hover {
  background-color: rgb(209, 29, 29);
  color: white;
}

@media screen and (min-width: 750px) {
  .profil-button-delete {
    width: 24%;
  }
}
</style>