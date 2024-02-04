<script lang="ts" setup>
</script>

<template>
  <nav class="header">
    <h1>Les recettes Ghibli</h1>
    <div class="links">
      <NuxtLink class="header_title" to="/">Accueil</NuxtLink>
      <NuxtLink class="header_title" to="/recipe-page">Les recettes</NuxtLink>

      <a class="header_title" href="https://github.com/KishiniCHL" target="_blank" rel="noopener noreferrer">Mon GitHub</a>
    </div>
  </nav>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1, .header_title {
    font-family: 'Cinzel', serif;
    text-decoration: none;
  }

  .links{ 
    display: flex;
    gap: 1rem;
  }

  .header_title {
    font-size: 1.5rem;
    color: #000;
    font-weight: 500;
    color: #473122;
  }

  .header_title:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}
</style>