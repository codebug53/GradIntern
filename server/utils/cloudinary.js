import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure storage for resume uploads
export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'resumes',
    allowed_formats: ['pdf', 'doc', 'docx'],
    resource_type: 'raw',
  },
});

export { cloudinary };
