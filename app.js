const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from APPsody!");
});
 
module.exports.app = app;
