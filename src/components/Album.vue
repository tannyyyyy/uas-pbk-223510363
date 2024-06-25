<!-- Album.vue -->
<template>
  <div class="container-fluid">
    <div class="card m-3">
      <div class="card-header">
        <h2>Albums</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="userSelect" class="form-label">Filter by User</label>
          <select
            v-model="selectedUser"
            @change="fetchAlbums"
            class="form-select"
            id="userSelect"
          >
            <option value="">Select a user</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <div v-if="filteredAlbums.length" class="row">
          <div
            v-for="album in filteredAlbums"
            :key="album.id"
            class="card col-md-4 mb-3"
          >
            <div class="card-body">
              <h5 class="card-title">{{ album.title }}</h5>
              <p class="card-text">User: {{ getUser(album.userId) }}</p>
              <router-link :to="'/album/' + album.id">View Album</router-link>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No albums found for the selected user.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [],
      users: [],
      selectedUser: "",
    };
  },
  methods: {
    async fetchAlbums() {
      try {
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = await usersResponse.json();

        if (this.selectedUser) {
          const albumsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/albums?userId=${this.selectedUser}`
          );
          this.albums = await albumsResponse.json();
        } else {
          this.albums = [];
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    getUser(userId) {
      const user = this.users.find((user) => user.id === userId);
      return user ? user.name : "Unknown User";
    },
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter(
        (album) =>
          !this.selectedUser || album.userId === parseInt(this.selectedUser)
      );
    },
  },
  mounted() {
    this.fetchAlbums();
  },
};
</script>
