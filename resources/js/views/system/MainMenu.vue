<template>
  <v-list dense nav>
    <!-- MENU -->
    <template v-for="item in menu">
      <!-- START Itens do menu primeiro nivel -->
      <v-list-item
        v-if="!item.children"
        :key="item.title"
        :to="item.route"
        link
        active-class="menuActive--text"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- END Itens do menu primeiro nivel -->

      <!-- START Sub-menu primeiro nivel -->
      <v-list-group
        v-if="item.children"
        :prepend-icon="item.icon"
        :key="item.title"
        no-action
        active-class="menuActive--text"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </template>

        <template v-for="child in item.children">
          <!-- START Itens segundo nivel -->
          <v-list-item
            v-if="!child.children"
            :key="child.title"
            :to="child.route"
            link
            active-class="menuActive--text"
          >
            <v-list-item-title v-text="child.title"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="child.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
          <!-- END Itens segundo nivel -->

          <!-- START Sub-menu segundo nivel -->
          <v-list-group
            v-if="child.children"
            :key="child.title"
            no-action
            sub-group
            active-class="menuActive--text"
          >
            <template v-slot:activator>
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </template>

            <!-- START Itens terceiro nivel -->
            <v-list-item
              v-for="grandchild in child.children"
              :key="grandchild.title"
              :to="grandchild.route"
              link
              active-class="menuActive--text"
            >
              <v-list-item-title v-text="grandchild.title"></v-list-item-title>
              <v-list-item-icon>
                <v-icon v-text="grandchild.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
            <!-- END Itens terceiro nivel -->
          </v-list-group>
          <!-- END Sub-menu segundo nivel -->
        </template>
      </v-list-group>
      <!-- END Sub-menu primeiro nivel -->
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        title: "Dashboard",
        route: "/system/dashboard",
        icon: "mdi-view-dashboard",
      },
      {
        title: "Example",
        route: null,
        icon: "mdi-cash",
        children: [
          {
            title: "Example item",
            route: "/system/example1",
            icon: "mdi-bank",
          },
          {
            title: "Example item",
            route: "/system/example2",
            icon: "mdi-credit-card",
          },
        ],
      },
    ],
  }),
};
</script>