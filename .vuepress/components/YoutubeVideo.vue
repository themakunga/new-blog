<template>
  <div class="youtube-player">
    <!-- Ensure the URL is valid and a YouTube video link is provided -->
    <pre>{{embedUrl}}</pre>
    <iframe
      v-if="videoId"
      :src="embedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="youtube-iframe"
    ></iframe>
    <p v-else class="error-message">Invalid YouTube URL provided.</p>
  </div>
</template>

<script>
export default {
  props: {
    // YouTube URL as a prop
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    // Extract YouTube video ID from the URL
    videoId() {
      const url = this.url;
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/?([a-zA-Z0-9_-]{11})|(?:watch\?v=|v\/)([a-zA-Z0-9_-]{11}))|youtu\.be\/([a-zA-Z0-9_-]{11}))/;
      const match = url.match(regex);
      return match ? match[1] || match[2] || match[3] : null;
    },
    // Generate embed URL for the iframe
    embedUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
  },
};
</script>

<style scoped>
.youtube-player {
  position: relative;
  max-width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
}

.youtube-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.error-message {
  color: red;
  font-weight: bold;
  text-align: center;
}
</style>

