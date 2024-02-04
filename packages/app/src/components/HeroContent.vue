<script lang="ts" setup>
</script>

<template>
    <div class="hero_content">
        <div class="hero_text_container">
            <h2>
                Bienvenue dans l'univers des recettes Ghibli
            </h2>
            <p class=" mb-24px">
                Explorez notre collection diversifiée de recettes, soigneusement conçues pour vous transporter dans les mondes fantastiques créés par Hayao Miyazaki. Que vous soyez un amateur de cuisine passionné ou un curieux en quête de nouvelles expériences gustatives, notre site est une invitation à découvrir des plats inspirés par l'imagination débordante des Studios Ghibli.
            </p>
            <NuxtLink to="/recipe-page" class="hero_button">Voir toutes les recettes</NuxtLink>
        </div>
        <div class="hero_image_container">
            <img src="~/assets/ghibli_logo.png" />
        </div>
    </div>
</template>

<style scoped>


.hero_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  padding: 0 12rem;
}

.hero_text_container {
  max-width: 50%;
}

.hero_image_container {
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.hero_image_container img {
  max-width: 50%;
  height: auto;
}



/* Media query for screens smaller than 768px */
@media (max-width: 768px) {
  .hero_content {
    flex-direction: column;
    padding: 1rem;
  }

  .hero_text_container, .hero_image_container img {
    max-width: 100%;
  }
}
</style>