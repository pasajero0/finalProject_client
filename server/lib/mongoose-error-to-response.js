const { response } = require('./response');
/**
 * Convert mongoose error message to expected by front end
 * @param src
 */
exports.mongooseErrorToResponse = (src) => {
  const data = {};
  if (src.errors) {
    const keys = Object.keys(src.errors);
    if (keys.length > 0) {
      keys.forEach((v) => {
        data[v] = src.errors[v].message;
      });
    }
  }
  return response(data, src.message, 1);
};
