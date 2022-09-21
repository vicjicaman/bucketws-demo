require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { init } = require("@bucketws/api");
const { init: initWeb } = require("./web");
const { init: initApp } = require("./app");

const app = express();

const instance = init({
  url: `https://${process.env.DOMAIN}/api/bucket`,
  secret: process.env.API_KEY,
});

const cxt = {
  domain: process.env.DOMAIN,
  bucketPublic: process.env.BUCKET_PUBLIC,
  bucketPrivate: process.env.BUCKET_PRIVATE,
  instance,
  secret: process.env.API_KEY,
};

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", express.static("www"));

initApp(app, cxt);
initWeb(app, cxt);

app.listen(3000, () => console.log("Example app is listening on port 3000"));
