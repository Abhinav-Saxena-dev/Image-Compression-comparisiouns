import Compressor from "compressorjs";
import fs from 'fs';
import { Blob } from "buffer";

export const exportWithCompressor = () => {
  const buffer = fs.readFileSync("./sources/wallpaperflare.com_wallpaper.jpg");
  const blob = new Blob(buffer);
  new Compressor(blob, {
    quality: 0.6,
    success(result) {
        console.log('====================================');
        console.log(result);
        console.log('====================================');
    },
    error(err) {
      console.log(err.message);
    },
  });
};
