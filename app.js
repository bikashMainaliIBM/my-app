const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM APS000000DY!");
});
 
module.exports.app = app;
