const init = (app, cxt) => {
  const { domain, bucketPublic, bucketPrivate, instance } = cxt;

  app.post("/app/signed-from-server/:mode", async function(req, res) {
    const { mode } = req.params;
    const { fileid, tags } = req.body;

    const { form } = await instance.BucketFile.upload({
      domain,
      name: mode === "public" ? bucketPublic : bucketPrivate,
      fileid,
      tags
    });

    res.json({ form });
  });

  app.post("/app/authorize-private-from-server", async function(req, res) {
    const token = await instance.Bucket.authorize({
      name: bucketPrivate
    });

    res.json({ token });
  });

  app.get("/app/list/:mode", async function(req, res) {
    const { mode } = req.params;

    const list = await instance.BucketFile.list({
      domain,
      name: mode === "public" ? bucketPublic : bucketPrivate
    });

    res.json({ list });
  });
};

module.exports = { init };
