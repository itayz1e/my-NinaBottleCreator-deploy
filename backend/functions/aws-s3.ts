const AWS = require("AWS-sdk");
AWS.config.update({ region: process.env.REGION });
const s3 = new AWS.S3();

export interface S3Config {
  bucket: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
}

export const s3Handler = (s3Config: S3Config) => {
  const s3 = new AWS.S3(s3Config);
  const retrieveFile = (name: any) => {
    return s3
      .getObject(
        {
          Bucket: s3Config.bucket,
          Key: `${name}`,
        },
        (err: any, data: any) => {
          if (err) {
            return err;
          }
          return data.Body;
        }
      )
      .promise();
  };

  const deleteFile = async ({
    Key,
    Bucket = s3Config.bucket,
    ...args
  }: any) => {
    return await s3
      .deleteObject({
        Bucket: Bucket,
        Key: `${Key}`,
      })
      .promise();
  };

  const getObject = ({ Key, Bucket = s3Config.bucket, ...args }: any) => {
    return s3.getObject({ Bucket, Key, ...args });
  };

  const uploadFile = async ({
    Key,
    Bucket = s3Config.bucket,
    ...args
  }: any) => {
    return s3.upload({ Bucket, Key, ...args }).promise();
  };

  const getFile = async ({ Key, Bucket = s3Config.bucket, ...args }: any) => {
    return s3.getObject({ Bucket, Key, ...args }).promise();
  };

  const getBuffer = async ({ Key }: any) => {
    const { Body: fileBuffer } = await getFile({ Key });

    if (!fileBuffer) {
      throw new Error("Could not find file on s3 path ${Key}");
    }
    return fileBuffer;
  };

  const getList = async ({
    Prefix,
    Bucket = s3Config.bucket,
    ...args
  }: any) => {
    const objectList = await s3
      .listObjects({ Bucket, Delimiter: "/", Prefix, ...args })
      .promise();

    return objectList.Contents;
  };

  return {
    uploadFile,
    deleteFile,
    getFile,
    getBuffer,
    getObject,
    getList,
  };
};

export async function emptyS3Bucket() {
  try {
    const listParams = {
      Bucket: process.env.BUCKET_NAME,
    };

    const data = await s3.listObjectsV2(listParams).promise();

    if (data.Contents.length === 0) {
      console.log("Bucket is already empty.");
      return;
    }

    const deleteParams = {
      Bucket: process.env.BUCKET_NAME,
      Delete: {
        Objects: data.Contents.map(({ Key }: { Key: string }) => ({ Key })),
      },
    };

    await s3.deleteObjects(deleteParams).promise();

    console.log("Bucket emptied successfully.");
  } catch (error) {
    console.error("Error emptying S3 bucket:", error);
    throw error;
  }
}

//   whats on the list
// const a = await s3Factory.getList({
//   Bucket: process.env.BUCKET_NAME,
//   Prefix: "images/",
// });
// console.log("before", a.length);

// //   delete one
// const d = await s3Factory.deleteFile({
//   Bucket: process.env.BUCKET_NAME,
//   Key: "",//uid string
// });
// console.log("delete", d);

// //   delete all
// const delete = await emptyS3Bucket();

// //  Whats left on the list
// const y = await s3Factory.getList({
//   Bucket: process.env.BUCKET_NAME,
//   Prefix: "images/",
// });
// console.log("after", y.length, y);
