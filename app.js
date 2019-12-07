const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM ApPpSODY!");
});
 
module.exports.app = app;
