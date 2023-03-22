import { ALLOWED_IMAGE_FORMATS } from '../constants/imageFormats';

export const checkIfUploadedImageFormatCorrect = (imageType: string): boolean =>
  ALLOWED_IMAGE_FORMATS.includes(imageType);
