const app = require('express')()

app.get('/', (req, res) => {
  res.send("hello everyone! this was changed right before our presentation!!!! Hi Omar, Hamid, Kirk, Matt and all.");
});
 
module.exports.app = app;
