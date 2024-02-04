<script lang="ts" setup>
import type { RecipeData } from '~/models/recipes.model'
import MainHeader from '~/components/MainHeader.vue' 
import MainFooter from '~/components/MainFooter.vue'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: recipe, pending } = useAsyncData(
  'recipe',
  () => findOne<RecipeData>(`recipes/${route.params.slug}`),
)
</script>

<template>
  <MainHeader />
  <div class="container">
    <template v-if="pending">
      <p>
        Chargement de la recette...
      </p>
    </template>
    <template v-else>
      <div class="image-container">
        <NuxtImg
          :src="recipe.data.image.url" 
          alt="" 
          aria-hidden="true"
          class="cover_image"
        />
      </div>

      <div class="s-recipe_container">
        <button @click="$router.go(-1)" class="recipe_link">Retour</button>

        <h1 class="mb-14">{{ recipe.data.title }}</h1>
        <div>
          <span v-for="tag in recipe.data.tags" :key="tag.id" class="style_tag">
            {{ tag.name }}
          </span>
        </div>
        <div v-html="$md.render(recipe.data.description )" class="mt-4"></div>
        <div>
          <div>
            <h2>
              La recette
            </h2>
            <ul class="list-none">
              <li v-for="step in recipe.data.steps" :key="step.id">
                <p class="title_steps">
                  {{ step.titre }}
                </p>
                <div v-html="$md.render(step.description)"></div>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </template>
  </div>
  <MainFooter />
</template>

<style>
.image-container {
  position: relative;
  width: 100%;
  height: 260px;
}

.image-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(215, 215, 215, 0.449);
  z-index: 1;
}

.cover_image {
  width: 100%;
  height: 260px;
  object-fit: contain;
  position: relative;
  z-index: 2;
}

.s-recipe_container {
  padding: 2rem 12rem;
}

.title_steps{
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 1rem;
}
</style>