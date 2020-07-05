const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

let app = express();
app.use(serveStatic(__dirname + "/dist/"));


app.get('/', function(req , res) {
  req.sendfile(__dirname + "/dist/index.html");
});

app.get(/.*/ , function(req , res) {
  res.sendfile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
});
