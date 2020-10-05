"use strict";

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);

      if (!data || !data.description) {
        ctx.throw(400, "Please add post description.");
      }

      if (!files || !files.image) {
        ctx.throw(400, "Please add a post image file.");
      }

      // user object always attached to the state
      const { user } = ctx.state;

      entity = await strapi.services.post.create(
        { ...data, ...{ author: user, likes: 0 } },
        { files }
      );
    } else {
      ctx.throw(400, "You must submit a multipart request.");
    }

    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
