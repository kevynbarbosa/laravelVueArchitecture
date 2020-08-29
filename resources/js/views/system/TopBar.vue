<template>
  <div>
    <v-app-bar app>
      <v-spacer />

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" to="/system/config">
            <v-icon>mdi-cogs</v-icon>
          </v-btn>
        </template>
        <span>Configurações</span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" @click="logout">
            <v-icon>mdi-logout-variant</v-icon>
          </v-btn>
        </template>
        <span>Logout (Sair)</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>


<script>
import store from "@/store";

export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    logout() {
      store.commit("storeUser", null);
      store.commit("storeToken", null);
      this.$router.push("/login");
    },
  },
};
</script>