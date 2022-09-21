const init = (app, cxt) => {

  app.use(function(req, res, next) {
    const isValid =
      cxt.domain &&
      cxt.bucketPublic &&
      cxt.bucketPrivate &&
      cxt.secret;

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


  app.get("/upload/public", function(req, res) {
    res.render("pages/upload", {
      ...cxt,
      page: "upload/public",
      bucketMode: "public",
      bucketTarget: cxt.bucketPublic
    });
  });

  app.get("/list/public", function(req, res) {
    res.render("pages/list", {
      ...cxt,
      page: "list/public",
      bucketMode: "public",
      bucketTarget: cxt.bucketPublic
    });
  });
};

module.exports = { init };
