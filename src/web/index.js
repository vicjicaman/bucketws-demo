const init = (app, cxt) => {
  //

  app.use(function(req, res, next) {
    const isValid =
      cxt.domain &&
      cxt.bucketPublic &&
      cxt.bucketPrivate &&
      cxt.apiKey &&
      cxt.apiSecret;

    if (!isValid) {
      if (req.originalUrl !== "/init") {
        res.redirect("/init");
        return;
      }
    } else {
      if (req.originalUrl === "/init") {
        res.redirect("/");
        return;
      }
    }

    next();
  });

  app.get("/", function(req, res) {
    res.render("pages/index", { ...cxt, page: "home" });
  });

  app.get("/init", function(req, res) {
    res.render("pages/init", { ...cxt, page: "init" });
  });

  app.get("/setup", function(req, res) {
    res.render("pages/setup", { ...cxt, page: "setup" });
  });

  app.get("/upload/private", function(req, res) {
    res.render("pages/upload", {
      ...cxt,
      page: "upload/private",
      bucketMode: "private",
      bucketTarget: cxt.bucketPrivate
    });
  });

  app.get("/upload/public", function(req, res) {
    res.render("pages/upload", {
      ...cxt,
      page: "upload/public",
      bucketMode: "public",
      bucketTarget: cxt.bucketPublic
    });
  });

  app.get("/authorize", function(req, res) {
    res.render("pages/authorize", { ...cxt, page: "authorize" });
  });

  app.get("/list/public", function(req, res) {
    res.render("pages/list", {
      ...cxt,
      page: "list/public",
      bucketMode: "public",
      bucketTarget: cxt.bucketPublic
    });
  });

  app.get("/list/private", function(req, res) {
    res.render("pages/list", {
      ...cxt,
      page: "list/private",
      bucketMode: "private",
      bucketTarget: cxt.bucketPrivate
    });
  });

  app.get("/anonymous", function(req, res) {
    res.render("pages/anonymous", { ...cxt, page: "anonymous" });
  });
};

module.exports = { init };
