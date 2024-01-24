// ** React Imports
import { ReactNode } from "react";

// ** Components Imports

// ** Model Imports
import { ImageData } from "./type";

export interface FormData {
  name?: string;
  manufacturer?: string;
  description: string;
  picture: string;
  spiritTypeId: number;
  alcoholPercentage?: number;
  caloriesPerOneOz?: number;
  countryOfOrigin?: string;
  companyEstablishmentYear?: number;
  orderUrl?: string;
  isoCode: string;
}

export interface LoginProps {
  children: ReactNode;
}

export interface MetaDataProps {
  onInputChange: (name: string, value: string | number) => void;
}


export interface ImageSelectionProps {
  onInputChange: (name: string, value: string | number) => void;
}

export interface TypeSpiritProps {
  onInputChange: (name: string, value: string | number) => void;
}

export interface UseImageSelectionProps {
  onInputChange: (name: string, value: string) => void;
}

export interface ImageSearchFormProps {
  onImagesFetched: (images: ImageData[]) => void;
}

export interface ImageNavigatorProps {
  bottleImages:ImageData[];
  onInputChange: (name: string, value: string) => void;
}

export interface LayoutProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export interface Spirit{
  name: string
  id: string
}
