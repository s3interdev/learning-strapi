module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  cron: {
    enabled: true,
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "8eb59c140da54c901362116c88d8b7f8"),
    },
  },
});
