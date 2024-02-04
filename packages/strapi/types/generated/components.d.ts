import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipesEtapes extends Schema.Component {
  collectionName: 'components_recipes_etapes';
  info: {
    displayName: 'Etapes';
  };
  attributes: {
    titre: Attribute.String & Attribute.Required;
    description: Attribute.RichText & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipes.etapes': RecipesEtapes;
    }
  }
}
