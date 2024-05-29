import imagemin from "imagemin";
import webp from "imagemin-webp";
import fs from "fs";
import sharp from "sharp";
import webc from "webp-converter";

export const convertWithImagemin = () => {

  imagemin(["./sources/*.jpg"], {
    destination: "./converted-images",
    plugins: [
      webp({
        lossless: false,
      }),
    ],
  }).then(res => {
    console.log('====================================');
    console.log(res);
    console.log('====================================');
  });
};

export const convertWithSharp = async () => {
    const buffer = fs.readFileSync("./sources/wallpaperflare.com_wallpaper.jpg");
    const timestamp = new Date().toISOString();
    const ref = `${timestamp}-image.webp`;
    
    await sharp(buffer)
      .webp({ quality: 20 })
      .toFile("./converted-images-sharp/" + ref);
};

export const convertWithWebConv = () => {
  const timestamp = new Date().toISOString();
  const ref = `${timestamp}-image.webp`;
  const result = webc.cwebp("./sources/wallpaperflare.com_wallpaper.jpg","./converted-images-webconv/"+ref,"-q 80");
  result.then((response) => {
    console.log(response);
  });
};