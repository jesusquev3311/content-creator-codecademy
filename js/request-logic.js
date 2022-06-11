// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!
const FILE_TYPE = {
  html: "text/html",
  css: "text/css",
  jpeg: "image/jpeg",
  png: "image/png",
  txt: "text/plain",
  default: "File type undefined",
}

function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

  return FILE_TYPE[extension] || FILE_TYPE.default;
}