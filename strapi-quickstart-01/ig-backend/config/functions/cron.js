"use strict";

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every monday at 1am.
   */
  // '0 1 * * 1': () => {
  //
  // }
  // "0 0 0 * * *": async () => {
  //   console.log("Once a day at midnight...");
  //   // retrieve the users
  //   const users = await ExtensionScriptApis.plugins[
  //     "users-permissions"
  //   ].services.user.fetchAll({});
  //   const res = await Promise.all(
  //     users.map(async (user) => {
  //       // retrieve all posts by the user
  //       const posts = await ExtensionScriptApis.services.post.find({
  //         author: user.id,
  //       });
  //       console.log("Posts written today: ", posts.length);
  //       const total = posts.reduce((acc, post) => acc + post.likes, 0);
  //       // send email
  //       await ExtensionScriptApis.plugins["email"].services.email.send({
  //         to: user.email,
  //         from: "strapi.admin@localhost.com",
  //         subject: "Your Total Likes for Today",
  //         text: `You got ${total} likes today...`,
  //       });
  //     })
  //   );
  // },
};
