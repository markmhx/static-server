require('park-ranger')();

var express = require('express'),
  app = express();

app.use(express.static(process.env.STATIC_SERVER_ASSETS_DIR));

let port = process.env.STATIC_SERVER_ASSETS_PORT ? process.env.STATIC_SERVER_ASSETS_PORT : 80;

app.listen(port, function() {
  console.log(`Static server is running on ${port}`);
});
