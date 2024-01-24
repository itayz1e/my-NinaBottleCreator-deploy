import axios from 'axios';
import { formDataSchema } from '../../validation/joiSchema'

export async function addForm(req: any, res: any) {
  try {
    const {
      name,
      manufacturer,
      description,
      picture,
      spiritTypeId,
      alcoholPercentage,
      caloriesPerOneOz,
      countryOfOrigin,
      companyEstablishmentYear,
      isoCode,
      orderUrl,
    } = req.body;
    const result = await formDataSchema.validateAsync(req.body)
    const bottleData = {
      name:name,
      manufacturer:manufacturer,
      description:description,
      picture:picture,
      spiritTypeId:spiritTypeId,
      alcoholPercentage:alcoholPercentage,
      caloriesPerOneOz:caloriesPerOneOz,
      countryOfOrigin:countryOfOrigin,
      companyEstablishmentYear:companyEstablishmentYear,
      isoCode:isoCode,
      orderUrl:orderUrl,
      barcodes:[
        {
        barcode: "1235",
        volumeInOz: 20
        }
        
    ]
    };
    
    // const deleteAllImages = await emptyS3Bucket(); //Deletes Bucket before saving new images
    // const apiUrl = process.env.FORM_API_URL;
    // const response = await axios.post(apiUrl, bottleData);
    // console.log(response);
    res.send({ ok: true, bottleData });
  } catch (error) {
    console.error("An error occurred:", error);
    if (error.isJoi) {
      return res.status(400).json({ error: error.details.map((err: any) => err.message) });
    }

    return res.status(500).json({ error: "Internal Server Error" });
  }
}
