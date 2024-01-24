// ** Model Imports
import { FormData, Spirit } from "../../Models/interface";

// ** React Imports
import { useState, useEffect } from "react";

// ** Third Party Imports
import { serverApi } from "../../server/api";
import { errorsService } from "../GlobalServices/GlobalErrorsService";
import { Globals } from "../GlobalServices/globals";
import { useImageContext } from "../../hooks/ImageProvider";

export async function submitFormData(finalFormData: FormData) {
  try {
    const response = await serverApi.post(
      "api/form/create-form",
      finalFormData,
      {
        headers: {
          authorization: Globals.VITE_AUTHORIZATION,
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorMessage = errorsService.getError(error);
    console.error(errorMessage);
  }
}

export const useBottleImages = () => {
  const {
    setBottleImagesValue,
    setImageSearchValue,
    setCurrentPageValue,
    currentPage,
  } = useImageContext();
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleImages = async (formRef: React.RefObject<HTMLFormElement>) => {
    setIsFetching(true);
    const form = formRef.current;
    if (!form) return;

    const imageSearchInput = form.elements.namedItem("imageSearch");
    const searchValue: string = imageSearchInput
      ? (imageSearchInput as HTMLInputElement).value
      : "";
    if (!searchValue) {
      setErrorMessage("Image search input is required");
      setIsFetching(false);
      return;
    }

    try {
      const { data } = await serverApi.post(
        "/api/script/get-images",
        { imageSearch: searchValue, page: currentPage },
        {
          headers: {
            authorization: Globals.VITE_AUTHORIZATION,
          },
        }
      );
      setBottleImagesValue(data.images);
      setImageSearchValue(searchValue);
      setCurrentPageValue(1);
    } catch (error) {
      const errorMessage = errorsService.getError(error);
      console.error(errorMessage);
      setErrorMessage(errorMessage);
    } finally {
      setIsFetching(false);
    }
  };

  const fetchNextPage = async (imageSearch: string) => {
    try {
      if (!imageSearch) {
        console.error("Image search query not provided.");
        return;
      }

      const { data } = await serverApi.post(
        "/api/script/get-images",
        { imageSearch: imageSearch, page: currentPage },
        {
          headers: {
            authorization: Globals.VITE_AUTHORIZATION,
          },
        }
      );
      
      setBottleImagesValue(data.images);
      setCurrentPageValue((prevPage) => prevPage + 1);
    } catch (error) {
      const errorMessage = errorsService.getError(error);
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const fetchImagesForPage = async (imageSearch: string) => {
    try {
      const { data } = await serverApi.post(
        "/api/script/get-images",
        { imageSearch: imageSearch, page: currentPage -1 },
        {
          headers: {
            authorization: Globals.VITE_AUTHORIZATION,
          },
        }
      );
      setBottleImagesValue(data.images);
    } catch (error) {
      const errorMessage = errorsService.getError(error);
      console.error(errorMessage);
      // Handle error as needed
    }
  };

  return {
    isFetching,
    handleImages,
    fetchNextPage,
    fetchImagesForPage,
    errorMessage,
  };
};



export const useTypeSpiritApi = () => {
  const [data, setData] = useState<Spirit[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const getTypeSpirit = async () => {
    try {
      setLoading(true);
      const response = await serverApi.get("/api/spirit/get-tpirit-type", {
        headers: {
          authorization: Globals.VITE_AUTHORIZATION,
        },
      });
      setData(response.data);
    } catch (error) {
      const errorMessage = errorsService.getError(error);
      setErrorMessage(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTypeSpirit();
  }, []);

  return { data, loading, errorMessage };
};
