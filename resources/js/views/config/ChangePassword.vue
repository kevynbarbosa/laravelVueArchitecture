<template>
  <div>
    <v-card outlined>
      <v-card-title>Alterar senha</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
            label="Senha atual"
            v-model="password"
            :rules="passwordRules"
            type="password"
            outlined
            dense
          />
          <v-text-field
            label="Nova senha"
            v-model="newPassword"
            :rules="passwordRules"
            type="password"
            outlined
            dense
          />
          <v-text-field
            label="Confirmar nova senha"
            v-model="newPasswordConfirm"
            :rules="newPasswordConfirmRules"
            type="password"
            outlined
            dense
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn
          block
          color="error"
          :disabled="!valid"
          :loading="loading"
          @click="alterarSenha"
        >Alterar Senha</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { apiService } from "@/services/ApiService";
import { required, maxLength, minLength } from "@/rules";

export default {
  data() {
    return {
      valid: false,
      password: "",
      passwordRules: [required(), minLength(6), maxLength(16)],
      newPassword: "",
      newPasswordConfirm: "",
      newPasswordConfirmRules: [
        required(),
        (v) => v == this.newPassword || "Senha e confirmação não conferem",
      ],
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
    alterarSenha: function () {
      this.loading = true;
      apiService
        .post("user/changePassword", {
          password: this.password,
          newPassword: this.newPassword,
        })
        .then((response) => {
          this.password = "";
          this.newPassword = "";
          this.newPasswordConfirm = "";
          this.$refs.form.resetValidation();
          this.$snotify.success(response);
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