/**
 * Build API structured response object
 * @param data {object} - data container
 * @param message {string} - server message
 * @param error {number} - error code number
 * @returns {{data: *, message: string, error: number}}
 */
exports.response = function buildResponse(data, message = '', error = 0) {
  return {
    data, message, success: !error
  };
};
