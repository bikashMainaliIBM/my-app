const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM APPS000000DY!");
});
 
module.exports.app = app;
