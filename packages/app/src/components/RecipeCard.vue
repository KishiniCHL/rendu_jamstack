<script lang="ts" setup>
import type { IRecipe } from '../models/recipes.model'

defineProps({
  recipe: {
    type: Object as PropType<IRecipe>,
    required: true,
  },
})
</script>

<template>
    <div class="card_container">
      <div class="card_img">
        <NuxtImg :src="recipe.image.url" alt="" />
      </div>
      <h3>
        {{ recipe.title }}
      </h3>

      <NuxtLink class="recipe_link" :to="`/recettes/${recipe.slug}`">
        Voir la recette
    </NuxtLink>
    </div>
</template>

<style>

.card_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.card_img{
  width: 100%;
  height: 260px;
}

.card_img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.recipe_link{
  border: #473122 1px solid;
  padding: 12px 16px;
  text-decoration: none;
  color: #000;
  margin-bottom: 24px;
  transition: border-radius 0.3s ease; 
}

.recipe_link:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
  color: #473122; 
  border-radius: 8px;
}


</style>