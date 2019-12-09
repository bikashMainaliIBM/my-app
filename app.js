const app = require('express')()

app.get('/', (req, res) => {
  res.send("Ritu, Esther asked me to do this..");
});
 
module.exports.app = app;
