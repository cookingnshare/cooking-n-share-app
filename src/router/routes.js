const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/search", component: () => import("pages/Search.vue") },
      { path: "/create", component: () => import("pages/Create.vue") },
      { path: "/notifications", component: () => import("pages/Notifications.vue") },
      { path: "/profile", component: () => import("pages/Profile.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
