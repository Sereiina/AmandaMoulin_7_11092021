const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('content');


// ------------SEPARATION ----------------------


// var aws = require('aws-sdk')
// const multer = require('multer');
// var multerS3 = require('multer-s3')

// const MIME_TYPES = {
//   'image/jpg': 'jpg',
//   'image/jpeg': 'jpg',
//   'image/png': 'png'
// };

// // var s3 = new aws.S3({
// //   accessKeyId: process.env.MINIO_KEY,
// //   secretAccessKey: process.env.MINIO_SECRET,
// //   endpoint: 'http://127.0.0.1:9000',
// //   s3ForcePathStyle: true,
// //   signatureVersion: 'v4'
// // });

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, 'images');
//   },
//   filename: (req, file, callback) => {
//     const name = file.originalname.split(' ').join('_');
//     const extension = MIME_TYPES[file.mimetype];
//     callback(null, name + Date.now() + '.' + extension);
//   }
// });


// // var upload = multer({ 
// //   storage: multerS3({
// //     s3: s3,
// //     bucket: 'media',
// //     contentType: multerS3.AUTO_CONTENT_TYPE,
// //     metadata: function (req, file, cb) {
// //       cb(null, {fieldName: file.fieldname});
// //     },
// //     key: function (req, file, cb) {
// //       cb(null, Date.now().toString() + '.' + MIME_TYPES[file.mimetype])
// //     }
// //   }) 
// // });


// module.exports = multer({storage: storage}).single('content');
// // module.exports = upload;
