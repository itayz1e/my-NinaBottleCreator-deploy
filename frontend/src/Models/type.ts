export type BarcodeType = {
    id: number;
    label: string;
    value: string;
    volumeInOz: number;
  };

export type ImageBottle = {
  images: ImageData[];
};

export type ImageData = {
  imgSrc: string;
  s3Key: string;
};

