

function printImageResult({ fileid, url: imgURL }) {
  const result = document.getElementById("uploader-result");
  result.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col">
          <img class="w-100 mt-2" src="${imgURL}" />
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
