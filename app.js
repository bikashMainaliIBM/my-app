const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM APPSODY!");
});
 
module.exports.app = app;
