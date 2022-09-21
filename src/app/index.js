const init = (app, cxt) => {
  const { domain, bucketPublic, bucketPrivate, instance } = cxt;

  app.post("/app/signed-from-server/:mode", async function (req, res) {
    const { mode } = req.params;
    const { fileid, tags } = req.body;

    const { form } = await instance.BucketFile.upload(
      mode === "public" ? bucketPublic : bucketPrivate,
      {
        fileid,
        description: "",
        tags,
      }
    );

    res.json({ form });
  });

  app.post("/app/authorize-private-from-server", async function (req, res) {
    const token = await instance.Bucket.authorize({
      name: bucketPrivate,
    });

    res.json({ token });
  });

  app.get("/app/list/:mode", async function (req, res) {
    const { mode } = req.params;

    const list = await instance.BucketFile.list(
      mode === "public" ? bucketPublic : bucketPrivate,
      {
        last: null,
        orderBy: "updatedAt",
        orderMode: "desc",
      }
    );

    res.json({ list });
  });
};

module.exports = { init };
