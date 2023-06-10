<template>
    <div class="main-feed">
      <div id="twitch-player" class="video-js"></div>
      <div class="chat">
        <h2>Live Chat</h2>
        <!-- Chat component goes here -->
      </div>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  import 'video.js/dist/video-js.css';
  
  export default {
    mounted() {
      // Initialize Video.js player
      this.player = videojs('twitch-player');
      // Embed Twitch stream
      this.player.src({
        src: 'https://player.twitch.tv/?channel=YOUR_CHANNEL_NAME',
        type: 'application/x-mpegURL',
      });
      // Load and play the Twitch stream
      this.player.load();
      this.player.play();
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
  };
  </script>
  
  <style scoped>
  /* MainFeed component styles go here */
  </style>