<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col lg="4" md="6">
        <v-card>
          <v-toolbar color="primary" dark elevation="1">
            <v-icon>mdi-login</v-icon>
            <span>Login</span>
          </v-toolbar>

          <v-card-text>
            <v-form v-model="valid" @submit="login()">
              <v-text-field
                v-model="form.email"
                :rules="rules.email"
                label="E-mail"
                type="email"
                filled
                autofocus
              ></v-text-field>
              <v-text-field
                v-model="form.password"
                :rules="rules.password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                label="Senha"
                filled
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-btn block color="primary" @click="login" :loading="loading" :disabled="!valid">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { apiService } from "@/services/ApiService";
import { required, email, maxLength, minLength } from "@/rules";
function formData() {
  return {
    email: "",
    password: "",
  };
}

function formRules() {
  return {
    email: [required(), email()],
    password: [required(), minLength(6), maxLength(10)],
  };
}

export default {
  data: () => ({
    form: formData(),
    rules: formRules(),
    showPassword: false,
    loading: false,
    valid: false,
  }),
  methods: {
    login: function () {
      this.loading = true;
      apiService
        .post("login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((response) => {
          this.$store.commit("storeUser", response.user);
          this.$store.commit("storeToken", response.token);
          this.$router.push("system");
        })
        .catch((error) => {
          this.$snotify.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  beforeCreate() {
    if (this.$store.state.token != null && this.$store.state.token != "") {
      this.$router.push("/system");
    }
  },
};
</script>