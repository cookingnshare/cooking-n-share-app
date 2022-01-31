<template>
  <q-layout view="lHh Lpr lFf" class="app-constrain">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-header elevated>
      <q-toolbar class="bg-white text-black" v-if="!$q.screen.xs">
        <img
          alt="Cooking n Share logo"
          src="~assets/images/logo-with-text.png"
          style="width: 10%; height: 5%; max-width: 552px; max-height: 283px; margin-bottom:10px;"
        />
        <q-space></q-space>
        <q-tabs v-model="tab" class="text-gray q-mr-lg" active-color="orange">
          <q-route-tab
            v-for="(item, index) in menu"
            :key="index"
            :name="item.name"
            :to="item.route"
            :label="item.label"
          />
        </q-tabs>
      </q-toolbar>

      <q-footer v-else>
        <div class="bg-white text-black">
          <q-tabs v-model="tab" class="text-gray" active-color="orange">
            <q-route-tab
              v-for="(item, index) in menu"
              :key="index"
              :name="item.name"
              :to="item.route"
              :icon="item.icon"
            />
          </q-tabs>
        </div>
      </q-footer>
    </q-header>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      tab: ref("home"),
      menu: [
        {
          name: "home",
          label: "Home",
          icon: "ion-home",
          route: "/",
        },
        {
          name: "search",
          icon: "ion-search",
          label: "Search",
          route: "/search",
        },
        {
          name: "create",
          icon: "ion-add-circle",
          label: "Create",
          route: "/create",
        },
        {
          name: "notifications",
          icon: "ion-notifications",
          label: "Notifications",
          route: "/notifications",
        },
        {
          name: "profile",
          icon: "ion-person",
          label: "Profile",
          route: "/profile",
        },
      ],
    };
  },
  methods: {
    goto(route) {
      this.$router.push(route);
    },
  },
});
</script>
