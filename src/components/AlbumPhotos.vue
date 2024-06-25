<template>
  <div class="container-fluid">
    <div class="card m-3">
      <div class="card-header">
        <h2>Photos in Album</h2>
      </div>
      <div class="card-body">
        <div v-if="photos.length" class="row">
          <div v-for="photo in photos" :key="photo.id" class="col-md-4 mb-3">
            <div>
              <q-img
                :src="photo.thumbnailUrl"
                class="card-img-top"
                :alt="photo.title"
                @click="openPhoto(photo)"
                style="height: 150px; width: 150px"
                contain
              />
              <div class="card-body">
                <h5 class="card-title">{{ photo.title }}</h5>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>No photos found for this album.</p>
        </div>
      </div>

      <!-- Modal to display full-sized photo -->
      <q-dialog v-model="isDialogOpen" persistent max-width="700px">
        <q-card>
          <q-card-section style="padding: 0">
            <q-img
              v-if="currentPhoto"
              :src="currentPhoto.url"
              :alt="currentPhoto.title"
              style="width: 600px; height: 600px; object-fit: contain"
            />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn label="Close" color="primary" @click="closeDialog" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [],
      isDialogOpen: false,
      currentPhoto: null,
    };
  },
  async created() {
    const albumId = this.$route.params.id;
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
      );
      this.photos = await response.json();
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  },
  methods: {
    openPhoto(photo) {
      this.currentPhoto = photo;
      this.isDialogOpen = true;
    },
    closeDialog() {
      this.currentPhoto = null;
      this.isDialogOpen = false;
    },
  },
};
</script>

<style>
.card-img-top {
  object-fit: cover;
  cursor: pointer;
}
</style>
