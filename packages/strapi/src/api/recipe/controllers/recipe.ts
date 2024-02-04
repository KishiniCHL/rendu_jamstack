/**
 * recipe controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::recipe.recipe', ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params
      const entity = await strapi.db.query('api::recipe.recipe').findOne({
        where: { slug: id },
        populate: ['image', 'tags', 'ingredients', 'steps'],
      })

      // dans populate ajouter le nom de l objet dans le tableau quon ajoute ex description de la recette

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
      return this.transformResponse(sanitizedEntity)
    }
  }));