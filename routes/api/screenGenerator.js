const { Router } = require('express');
const router = Router();
const multer = require('multer');

const upload = multer({
    dest: 'uploads/',

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

router.get('/', (req, res) => {
    res.send('Hello from SG');
});

router.post('/', upload.array('upload', 10), (req, res) => {
    console.log(req.body);
    // let upload = multer({ storage: storage }).array('fileUpload', 10);
    // console.log(req.body);
    // upload(req, res, function (err) {
    //     if (err) {
    //         console.log(err);
    //     }

    //     if (req.fileValidationError) {
    //         return res.send(req.fileValidationError);
    //     }

    //     let result = 'You have uploaded these images: <hr />';
    //     const files = req.files;
    //     console.log(files);
    //     let index, len;

    //     // Loop through all the uploaded images and display them on frontend
    //     for (index = 0, len = files.length; index < len; ++ind) {
    //         result += `<h3>${files[index].path}</h3>`;
    //     }
    //     result += `<hr/><a href="./">Upload more images</a>`;
    //     res.send(result);
    // });

    res.send(req.body);
});

module.exports = router;
