// ** style Imports
import "../../style/featuresStyle/ImageSelection.scss";

// ** React Imports
import { useState } from "react";

// ** Third Party Imports
import Icon_Search from "../../assets/icons/Icon_Search";

// ** Model Imports
import { ImageSelectionProps } from "../../Models/interface";
import { ImageData } from "../../Models/type";

// ** Components Imports
import ImageSearchForm from "../props/ImageSearchForm";
import ImageNavigator from "../props/ImageNavigator";

function ImageSelection({ onInputChange }: ImageSelectionProps) {
  const [bottleImages, setBottleImages] = useState<ImageData[]>([]);
  
  const handleImagesFetched = (images: ImageData[]) => {
    setBottleImages(images);
  };

  return (
    <div className="mainContainer">
      <div className="search_title">
        <Icon_Search />
        <h1>SEARCH</h1>
      </div>
      <ImageSearchForm onImagesFetched={handleImagesFetched} />
      <ImageNavigator
        bottleImages={bottleImages}
        onInputChange={onInputChange}
      />
    </div>
  );
}

export default ImageSelection;
