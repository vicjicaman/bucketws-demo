require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { init } = require("@bucketws/api");
const { init: initWeb } = require("./web");
const { init: initApp } = require("./app");

const app = express();

const release = process.env.RELEASE || "v2";
const instance = init({
  url: `https://api.pagews.com/${release}/bucket/api`,
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const cxt = {
  release,
  domain: process.env.DOMAIN,
  bucketPublic: process.env.BUCKET_PUBLIC,
  bucketPrivate: process.env.BUCKET_PRIVATE,
  localhostAccessKey: process.env.LOCALHOST_ACCESS_KEY,
  instance,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
};

app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", express.static("www"));

initApp(app, cxt);
initWeb(app, cxt);

app.listen(3000, () => console.log("Example app is listening on port 3000"));
