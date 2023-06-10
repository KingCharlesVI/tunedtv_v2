<template>
    <header class="header">
      <div class="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/subscribe">Subscribe</router-link></li>
          <li><router-link to="/video-on-demand">Video On Demand</router-link></li>
        </ul>
      </nav>
    </header>
  </template>

  <script>
    // eslint-disable-next-line vue/multi-word-component-names
  export default {
    // Header component logic goes here
  };
  </script>
  
  <style scoped>
  /* Header component styles go here */
  </style>