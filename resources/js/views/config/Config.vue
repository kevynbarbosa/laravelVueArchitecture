<template>
  <div>
    <Photo />

    <v-divider class="mt-4 mb-4"></v-divider>

    <v-row justify="center">
      <v-col cols="6">
        <v-tabs grow>
          <v-tab>
            <v-icon left>mdi-account</v-icon>Geral
          </v-tab>
          <v-tab>
            <v-icon left>mdi-lock</v-icon>Senha
          </v-tab>

          <v-tab-item>
            <UserData />
          </v-tab-item>
          <v-tab-item>
            <ChangePassword />
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ChangePassword from "./ChangePassword";
import Photo from "./Photo";
import UserData from "./UserData";

export default {
  components: { ChangePassword, Photo, UserData },
  data() {
    return {};
  },
  methods: {},
};
</script>