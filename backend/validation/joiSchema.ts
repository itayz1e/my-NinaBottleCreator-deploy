import Joi from "joi";

export interface FormData {
  name: string;
  manufacturer: string;
  description: string;
  picture: string;
  spiritTypeId: number;
  alcoholPercentage: number;
  caloriesPerOneOz: number;
  countryOfOrigin: string;
  companyEstablishmentYear: number;
  isoCode: string;
  orderUrl: string;
  }


  export const formDataSchema = Joi.object({
    name: Joi.string().required(),
    manufacturer: Joi.string().optional(),
    description: Joi.string().required(),
    picture: Joi.string().required(),
    spiritTypeId: Joi.number().required(),
    alcoholPercentage: Joi.number().required(),
    caloriesPerOneOz: Joi.number().optional(),
    countryOfOrigin: Joi.string().required(),
    companyEstablishmentYear: Joi.number().optional(),
    isoCode: Joi.string().required(),
    orderUrl: Joi.string().uri().optional(),
  });


module.exports ={
  formDataSchema
}