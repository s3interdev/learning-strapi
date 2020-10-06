"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    let entity;

    const { user } = ctx.status;
    const { post } = ctx.request.body;

    if (typeof post !== "number") {
      ctx.throw(400, "Please only pass the Id for the post.");
    }

    const realPost = await strapi.services.post.findOne({ id: post });

    if (!realPost) {
      ctx.throw(400, "The post doesn't exist.");
    }

    const found = await strapi.services.like.findOne({
      user: user.id,
      post,
    });

    if (found) {
      ctx.throw(400, "You have already liked this post.");
    }

    if (ctx.is("multipart")) {
      ctx.throw(400, "Please make only JSON requests.");
    } else {
      entity = await strapi.services.like.create({ post, user });
    }

    // update the likes counter
    const { likes } = realPost;
    const updatedPost = await strapi.services.post.update(
      { id: post },
      { likes: likes + 1 }
    );

    return sanitizeEntity(entity, { model: strapi.models.like });
  },

  async delete(ctx) {
    const { user } = ctx.status;
    const { postId } = ctx.params;

    const post = parseInt(postId);

    if (typeof post !== "number") {
      ctx.throw(400, "Please only pass the Id for the post.");
    }

    const entity = await strapi.services.like.delete({ post, user: user.id });

    if (entity.length) {
      const { likes } = entity[0].post;
      const updatedPost = await strapi.services.post.update(
        { id: post },
        { likes: likes - 1 }
      );

      return sanitizeEntity(entity[0], { model: strapi.models.like });
    }
  },
};
