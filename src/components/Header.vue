<script setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <nav>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  nav {
    background-color: #1e1f35;
  }
  nav ul {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
