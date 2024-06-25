// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import ToDoList from "../src/components/ToDoList.vue";
import Posts from "../src/components/Post.vue";
import Albums from "../src/components/Album.vue";
import AlbumPhotos from "../src/components/AlbumPhotos.vue"; // Import the new component

const routes = [
  {
    path: "/",
    name: "ToDoList",
    component: ToDoList,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  {
    path: "/album/:id", // Dynamic route for album photos
    name: "AlbumPhotos",
    component: AlbumPhotos,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
