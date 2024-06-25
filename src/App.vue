<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="title">Uas Tanny</q-toolbar-title>
        <router-link
          to="/"
          class="q-btn q-btn-item non-selectable q-btn--flat q-btn--rectangle text-white q-mr-sm"
          >ToDo List</router-link
        >
        <router-link
          to="/posts"
          class="q-btn q-btn-item non-selectable q-btn--flat q-btn--rectangle text-white q-mr-sm"
          >Posts</router-link
        >
        <router-link
          to="/albums"
          class="q-btn q-btn-item non-selectable q-btn--flat q-btn--rectangle text-white q-mr-sm"
          >Albums</router-link
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Roboto, sans-serif;
  background-image: url(../src/assets/cb.jpeg);
  background-size: cover;
}

.router-link-active {
  font-weight: bold;
}
.title {
  margin-left: 3rem;
}
.q-btn--rectangle {
  display: inline-block;
  padding: 0.5em 1em;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
}

.q-btn--rectangle:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>
