module.exports = function (app) {
  app.get('/user', (req, res) => {
    res.send({name: 'achala', id: '345'});
  });
};
