const app = require('express')()

app.get('/', (req, res) => {
  res.send("hello everyone! this was changed right before our presentation!!!! Hi Omar and Hamid");
});
 
module.exports.app = app;
