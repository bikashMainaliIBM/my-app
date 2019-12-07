const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM cloud PAK for Apps!");
});
 
module.exports.app = app;
