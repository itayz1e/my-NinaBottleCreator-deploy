// ** React Imports
import React, { useEffect, useRef } from "react";
import { Oval } from 'react-loader-spinner';

// ** Third Party Imports
import { useBottleImages } from "../../services/Http_Services/httpClient";

// ** Model Imports
import { ImageSearchFormProps } from "../../Models/interface";
import { useImageContext } from "../../hooks/ImageProvider";

const ImageSearchForm: React.FC<ImageSearchFormProps> = ({
  onImagesFetched,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { handleImages, isFetching } = useBottleImages();
  const { bottleImages } = useImageContext();

  useEffect(() => {
    onImagesFetched(bottleImages);
  }, [bottleImages, onImagesFetched, ]);

  return (
    <form ref={formRef} className="SearchBoxBottleForm">
      <input
        name="imageSearch"
        type="text"
        placeholder="Search Bottle"
        className="searchBottleInput"
      />
      <button
        className="searchBtn"
        type="button"
        onClick={() => handleImages(formRef)}
        disabled={isFetching}
      >
        {isFetching ? (
        <div className="fetching-container">
          <Oval height={30} width={30} color="white" />
        </div>
        ) : (
          "Search"
        )}
      </button>
    </form>
  );
};

export default ImageSearchForm;
