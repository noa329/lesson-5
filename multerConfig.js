import multer from 'multer';


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/images'),
  filename: (req, file, cb) => {
    cb(null, `book-${req.params.id}-${Date.now()}.${file.originalname.split('.').pop()}`);
  }
});

export const upload = multer({ storage });
