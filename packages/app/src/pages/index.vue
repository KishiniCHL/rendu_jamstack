<script lang="ts" setup>
import RecipeCard from '~/components/RecipeCard.vue'
import type { ITag } from '~/models/recipes.model'
import MainHeader from '~/components/MainHeader.vue' 
import HeroContent from '~/components/HeroContent.vue' 
import MainFooter from '~/components/MainFooter.vue'
</script>

<template>
  <div class="container">
    <MainHeader /> 
    <HeroContent />
    <MainFooter />
  </div>
</template>