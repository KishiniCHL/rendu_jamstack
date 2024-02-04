<script lang="ts" setup>
</script>

<template>
    <div class="hero_content">
        <div class="hero_text_container">
            <h2>
                Bienvenue dans l'univers des recettes Ghibli
            </h2>
            <p>
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

h2{
    font-family: 'Cinzel', serif;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 1rem;
}
.hero_content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90vh;
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

.hero_button {
  appearance: none;
  background-color: transparent;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #3B3B3B;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.hero_button:disabled {
  pointer-events: none;
}

.hero_button:hover {
  color: #fff;
  background-color: #1A1A1A;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.hero_button:active {
  box-shadow: none;
  transform: translateY(0);
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