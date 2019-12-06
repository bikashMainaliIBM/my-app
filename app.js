const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from APPSODY!");
});
 
module.exports.app = app;
