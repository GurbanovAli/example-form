import { urlRegex } from 'constants/regEx';
import imageExtensions from 'image-extensions';

export const isUrl = (url: string): boolean => {
  const regex = new RegExp(urlRegex);

  return !!url.match(regex);
};

export const isImageUrl = (url: string): boolean => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();

  return ext ? imageExtensions.includes(ext) : false;
};
