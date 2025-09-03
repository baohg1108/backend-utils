export const corsOptions = {
  origin: function (origin, callback) {
    return callback(null, true);
  },

  optionsSuccessStatus: 200,

  // CORS sẽ cho phép nhận cookies từ request
  // credentials: true
};
