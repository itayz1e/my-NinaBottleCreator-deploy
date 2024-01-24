// ** React Imports
import React from "react";

// ** Third Party Imports
import useImageSelection from "../../services/Http_Services/image_service";
import LeftArrow from "../../assets/icons/Icon_LeftArrow";
import RightArrow from "../../assets/icons/Icon_RightArrow";

// ** Model Imports
import { ImageNavigatorProps } from "../../Models/interface";
import { useBottleImages } from "../../services/Http_Services/httpClient";
import { useImageContext } from "../../hooks/ImageProvider";

const ImageNavigator: React.FC<ImageNavigatorProps> = ({
  onInputChange,
  bottleImages,
}) => {
  const { fetchNextPage, fetchImagesForPage } = useBottleImages();
  const { selectedImage, handleImageSelect } = useImageSelection({
    onInputChange,
  });
  const { imageSearch, currentPage, setCurrentPageValue } = useImageContext(); // Extracted from context
  console.log(bottleImages)
  const handleFetchNextPage = () => {
    fetchNextPage(imageSearch);
  };

  const handleShowPreviousImages = () => {
    if (currentPage > 1) {
      setCurrentPageValue((prevPage) => prevPage - 1);
      fetchImagesForPage(imageSearch);
    }
  };
  return (
    <div className="imageSelectionContainer">
      <button
        className="imageNavigation left"
        type="button"
        onClick={handleShowPreviousImages}
      >
        <LeftArrow />
      </button>
      {bottleImages.map((image, index: any) => (
        <div key={index} className="imageContainer">
          <div onClick={() => handleImageSelect(image.imgSrc)}>
            <div
              className={`imageBox ${
                selectedImage === image.imgSrc ? "selected" : ""
              }`}
            >
              {image.imgSrc ? (
                <img
                  src={`data:image/jpeg;base64,${image.imgSrc}`}
                  className="image"
                  alt="picture"
                  onError={(e) => {
                    console.error("Image failed to load:", e);
                  }}
                />
              ) : (
                <div className="emptyBox"></div>
              )}
            </div>
          </div>
        </div>
      ))}
      {[...Array(Math.max(3 - (bottleImages.length || 0), 0))].map(
        (_, index) => (
          <div
            key={index + (bottleImages.length || 0)}
            className="imageContainer"
          >
            {/* loader */}
            <div className="emptyBox"></div>
          </div>
        )
      )}
      <button
        className="imageNavigation right"
        type="button"
        onClick={handleFetchNextPage}
      >
        <RightArrow />
      </button>
      <div className="selectedImageContainer">
        <span className="image_selected_text">selected picture</span>
        <div className="SelectedBox">
          {selectedImage ? (
            <img src={`data:image/jpeg;base64,${selectedImage}`} alt="Selected" />
          ) : (
            <div className="emptyBoxContainer">
              <div className="image emptyBox"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageNavigator;
