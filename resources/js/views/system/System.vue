<template>
  <div>
    <SystemLeftMenu />
    <SystemTopBar />
    <SystemFooter />

    <div class="pl-2 pr-2">
      <router-view />
    </div>
  </div>
</template>

<script>
import SystemTopBar from "./TopBar";
import SystemLeftMenu from "./LeftMenu";
import SystemFooter from "./Footer";
import { mapState } from "vuex";

export default {
  components: {
    SystemTopBar,
    SystemLeftMenu,
    SystemFooter,
  },
  computed: {
    ...mapState(["token"]),
  },

  methods: {
    logout: function () {
      if (
        this.$store.state.token == "" ||
        this.$store.state.token == null ||
        this.$store.state.token == undefined
      ) {
        this.$router.push("/login");
      }
    },
  },
  watch: {
    token: {
      handler: "logout",
    },
  },
  beforeCreate() {
    if (
      this.$store.state.token == "" ||
      this.$store.state.token == null ||
      this.$store.state.token == undefined
    ) {
      this.$router.push("/login");
    }
  },
};
</script>