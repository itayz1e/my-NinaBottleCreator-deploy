import { emptyS3Bucket, s3Handler } from "../../functions/aws-s3";
import { generateS3Key, imageToBase64 } from "../../functions/helpers";
import { scrapingBottleImages } from "../../scipt_images/index";

const s3Factory = s3Handler({
  bucket: process.env.BUCKET_NAME,
  region: process.env.REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export async function getImages(req: any, res: any) {
  try {
    const { imageSearch, page = 0, pageSize = 3 } = req.body;
    const imageData = await scrapingBottleImages(imageSearch);

    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;

    const currentPage = imageData.slice(startIndex, endIndex);
    const base64Images = [];
    const deleteAllImages = await emptyS3Bucket(); //Deletes Bucket before saving new images

    // Save to S3 and collect URLs
    const s3Urls = [];
    for (const imageInfo of currentPage) {
      const s3Key = generateS3Key();
      const base64Image = await imageToBase64(imageInfo.imgSrc);
      base64Images.push({ imgSrc: base64Image});

      // const imageBuffer = Buffer.from(base64Image, "base64");
      // await s3Factory.uploadFile({
      //   Bucket: process.env.BUCKET_NAME,
      //   Key: `${s3Key}.png`,
      //   Body: imageBuffer,
      // });

      // collect the S3 URL and push it to the array
    //   const s3Url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${s3Key}.png`;
    //   s3Urls.push({s3Url});
    //   console.log(s3Url);
    }

    return res.status(200).send({ images: base64Images });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}







