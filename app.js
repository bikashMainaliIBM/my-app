const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello FROM APSODY!");
});
 
module.exports.app = app;
