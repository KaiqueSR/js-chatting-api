module.exports = function (statusCode, message) {
  this.error = true;
  this.statusCode = statusCode;
  this.message = message;
};