<template>
  <div>
    <v-card outlined>
      <v-card-title>Alterar dados do usuário</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field label="name" v-model="name" :rules="nameRules" outlined dense />
          <v-text-field label="E-mail" v-model="email" :rules="emailRules" outlined dense />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="success"
          :disabled="!valid"
          :loading="loading"
          @click="alterarUsuario"
        >Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { apiService } from "@/services/ApiService";
import { required, email } from "@/rules";

export default {
  data() {
    return {
      valid: false,
      name: this.$store.state.user.name,
      nameRules: [required()],
      email: this.$store.state.user.email,
      emailRules: [required(), email()],
      loading: false,
      snack: {
        show: false,
        text: "",
        timeout: 3000,
        color: "",
        icon: "",
      },
    };
  },
  methods: {
    alterarUsuario: function () {
      this.loading = true;
      apiService
        .post("user/updateData", {
          name: this.name,
          email: this.email,
        })
        .then((response) => {
          this.$snotify.success("Dados alterados com sucesso.");
          this.$store.commit("storeUser", response);
        })
        .catch((error) => {
          this.$snotify.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>