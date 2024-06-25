<template>
  <div>
    <header>
      <nav class="navbar">
        <a href="/todos" class="btn-link">
          <h2 style="color: bisque">ToDos</h2>
        </a>
        <a href="/posts" class="btn-link">
          <h2 style="color: bisque">Posts</h2>
        </a>
        <a href="/albums" class="btn-link">
          <h2 style="color: bisque">Albums</h2>
        </a>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.navbar {
  display: flex; /* Membuat konten menjadi flexbox */
  justify-content: center; /* Pusatkan item di dalam navbar */
  align-items: center; /* Pusatkan secara vertikal */
  height: 60px; /* Tinggi navbar */
}

.navbar a {
  margin: 0 8px; /* Jarak antara setiap link */
}
</style>
