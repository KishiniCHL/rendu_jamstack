<script lang="ts" setup>
import RecipeCard from '~/components/RecipeCard.vue'
import type { ITag } from '~/models/recipes.model'
import MainHeader from '~/components/MainHeader.vue' 
import MainFooter from '~/components/MainFooter.vue'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags, pending: isLoading } = useAsyncData(
  'tags',
  async () => {
    const result = await find<{ data: ITag[] }>('tags')
    return result
  },
)

function addTag(tag: string) {
  if (!search.queryTags.includes(tag))
    search.queryTags.push(tag)
  else search.queryTags = search.queryTags.filter(t => t !== tag)
}
</script>


<template>
  <MainHeader />
  <div v-if="!search.pending && search.sortedByTags" class="recipe_container">
      <div>
        <aside>
          <div role="search" class="search_container">
            <label for="search" class="mb-8px">Chercher une recette :</label>
            <input id="search" v-model="search.query" type="search" class="search-bar">
          </div>
          <div>
            <p>Filtrer les recettes par noms : </p>
            <div role="group">
              <button
                class="tag_button"
                v-for="tag in tags?.data" :key="tag.id"
                :class="{ 'bg-gray-900 text-white': search.queryTags.includes(tag.slug) }"
                :title="tag.name"
                @click="addTag(tag.slug)"
              >
                {{ tag.name }}
              </button>
            </div>
            <button
              @click="search.resetTags" class="hero_button"
            >
              Réinitialiser les tags
            </button>
            
            <hr class="mb-12">
          </div>
        </aside>
        <client-only>
          <div>
            <h2 class="text_middle">Recettes</h2>
            <template v-if="isLoading">
              <p>
                Chargement des recettes, veuillez patienter un tout petit peu...
              </p>
            </template>
            <template v-else-if="search.sortedByTags.length">
              <div class="card_wrapper">
                <RecipeCard
                  v-for="recipe in search.sortedByTags"
                  :key="recipe.id"
                  :recipe="recipe"
                />
              </div>
            </template>
            <p v-else>
              Aucun résultat pour cette recherche
            </p>
          </div>
        </client-only>
      </div>
  </div>
  <MainFooter />
</template>

<style>

  .recipe_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 12rem;
    /* background: rgb(252,192,246);
    background: radial-gradient(circle, rgba(252,192,246,0.17699579831932777) 0%, rgba(175,140,126,0.1966036414565826) 100%); */
  }

  .search-bar {
    width: 200px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 15px;
    padding: 8px;
  }

  .search_container{
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .normal_text_style {
    margin-bottom: 8px;
  }

  .tag_button {
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.recipe_container .hero_button{
  margin: 8px 0;
  width: 200px;
  min-height: 36px;
  padding: 0;
  font-size: 14px;
}

.card_wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>