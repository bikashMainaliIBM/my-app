const app = require('express')()

app.get('/', (req, res) => {
  res.send("may work!!");
});
 
module.exports.app = app;
