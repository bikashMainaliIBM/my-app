const app = require('express')()

app.get('/', (req, res) => {
  res.send("hello everyone! this was changed right before our presentation!!!!");
});
 
module.exports.app = app;
