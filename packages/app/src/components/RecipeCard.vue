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
      <p>
        {{ recipe.description }}
      </p>
      <NuxtLink :to="`/recettes/${recipe.slug}`">
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
  border: 1px solid #000;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;
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

</style>