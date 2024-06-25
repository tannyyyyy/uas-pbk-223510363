<template>
  <div class="container-fluid">
    <div class="card m-3">
      <div class="card-header">
        <h2>Posts</h2>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <label for="userSelect" class="form-label">Filter by User</label>
          <select
            v-model="selectedUser"
            @change="fetchPosts"
            class="form-select"
            id="userSelect"
          >
            <option value="">Select a user</option>
            <option v-for="user in users" :key="user.id" :value="user.id">
              {{ user.name }}
            </option>
          </select>
        </div>
        <ul v-if="posts.length" class="list-group list-group-flush">
          <li
            v-for="post in filteredPosts"
            :key="post.id"
            class="list-group-item"
          >
            <h5>{{ post.title }}</h5>
            <p>{{ post.body }}</p>
            <small>User: {{ getUser(post.userId) }}</small>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      users: [],
      selectedUser: "",
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = await usersResponse.json();
        if (this.selectedUser) {
          const postsResponse = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`
          );
          this.posts = await postsResponse.json();
        } else {
          this.posts = [];
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
    filteredPosts() {
      return this.posts.filter(
        (post) =>
          !this.selectedUser || post.userId === parseInt(this.selectedUser)
      );
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>
.list-group-item-secondary .form-check-label {
  color: #808080; /* Gray text color */
}
</style>
