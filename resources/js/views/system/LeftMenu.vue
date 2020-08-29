<template>
  <div>
    <v-navigation-drawer app dark class="primary">
      <v-row justify="center" class="pt-4 pb-4">
        <v-avatar size="70">
          <img src="/img/logo_semplice_min.png" alt="Logo" />
        </v-avatar>
      </v-row>

      <v-row justify="center" class="pa-4">
        <span class="white--text">Olá, {{ shortName }}</span>
      </v-row>

      <v-divider></v-divider>

      <MainMenu />
    </v-navigation-drawer>
  </div>
</template>

<script>
import MainMenu from "./MainMenu";

export default {
  components: {
    MainMenu,
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          route: "/system/dashboard",
          icon: "mdi-view-dashboard",
        },
        { title: "Contas", route: "/system/contas", icon: "mdi-bank" },
        { title: "Photos", route: "/system/photos", icon: "mdi-image" },
        { title: "About", route: "/system/about", icon: "mdi-help-box" },
        { title: "Table", route: "/system/table", icon: "mdi-help-box" },
      ],
    };
  },
  computed: {
    shortName: function () {
      if (this.$store.state.user != null) {
        return this.$store.state.user.name.replace(/ .*/, "");
      } else return "";
    },
  },
};
</script>
