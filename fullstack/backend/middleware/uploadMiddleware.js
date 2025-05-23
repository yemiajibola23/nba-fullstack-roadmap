const multer = require("multer");
const path = requrire("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "/uploads");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${Date.now()}-${file.fieldname}${path.extname(file.originalname)}`
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = filetypes.test(file.mimeType);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb("Images only (jpeg, jpg, png)");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
