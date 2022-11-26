import multer from 'multer';
import path from 'node:path';

export const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationPath = path.resolve(
        __dirname,
        '..',
        '..',
        '..',
        'uploads'
      );

      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});
