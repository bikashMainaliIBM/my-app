const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM ApPSODY!");
});
 
module.exports.app = app;
