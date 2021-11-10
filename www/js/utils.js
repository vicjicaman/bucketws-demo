const refreshAuthState = async bucket => {
  const authorizer = document.getElementById("authorizer");
  const unauthorizer = document.getElementById("unauthorizer");
  const status = document.getElementById("status");

  const info = await PageWSLib.Image.auth(domain);

  if (status) {
    if (authorizer && unauthorizer) {
      authorizer.style.display = "none";
      unauthorizer.style.display = "none";
    }

    if (info) {
      if (unauthorizer) {
        unauthorizer.style.display = "inline";
      }
      status.className = "alert alert-success";
      status.innerHTML = "You have access to the bucket <b>" + bucket + "</b>";
    } else {
      if (authorizer) {
        authorizer.style.display = "inline";
      }
      status.className = "alert alert-danger";
      status.innerHTML =
        "You don't have access to the bucket <b>" + bucket + "</b>";
    }
  }
  return info;
};

function printMinimapResult({ fileid, url: imgURL }) {
  const result = document.getElementById("uploader-result");

  let cols = "";
  for (let i = 1; i <= 12; i++) {
    cols += `
      <div class="row">
        <div class="col-${i}">
          <img class="w-100 mt-2" data-src="${imgURL}" />
        </div>
      </div>`;
  }

  result.innerHTML = `
    <div class="container">
        ${cols}
    </div>`;
}

function printImageResult({ fileid, url: imgURL }) {
  const result = document.getElementById("uploader-result");
  result.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="w-100 mt-2" data-src="${imgURL}" />
        </div>
      </div>
    </div>`;
}

function printFileResult({ fileid, url }) {
  const result = document.getElementById("uploader-result");
  result.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col">
          <a target="_blank" href="${url}" >Download</a>
        </div>
      </div>
    </div>`;
}
