module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/remote', require('./routes/remote.route'));

};
