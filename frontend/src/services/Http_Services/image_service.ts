// ** React Imports
import { useState } from "react";

// ** Model Imports
import { UseImageSelectionProps } from "../../Models/interface";

const useImageSelection = ({ onInputChange }: UseImageSelectionProps) => {
  const [selectedImage, setSelectedImage] = useState<string>();

  const handleImageSelect = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    onInputChange("picture", imageSrc);
  };

  return { selectedImage, handleImageSelect };
};

export default useImageSelection;
