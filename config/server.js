module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 27017),
  app: {
    keys: env.array('APP_KEYS',['fafPWsg4LV4WqCqzKktF/w==' ,'UQgMm0TpCu9tN2IHJrieiQ==','IZefquJoyB4gRQBKqHSj4A==' ,'cYVQXKZiaZU4l2jCvOQ6wg==']),
  },
});
