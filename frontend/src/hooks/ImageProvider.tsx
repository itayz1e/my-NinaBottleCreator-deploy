import React, { createContext, useContext, useState, ReactNode } from "react";
import { ImageData } from "../Models/type";

interface ImageContextType {
  imageSearch: string;
  setImageSearchValue: React.Dispatch<React.SetStateAction<string>>;
  bottleImages: ImageData[];
  setBottleImagesValue: (newImages: ImageData[]) => void;
  currentPage: number;
  setCurrentPageValue: React.Dispatch<React.SetStateAction<number>>;
  currentHistoryIndex: number;
  setCurrentHistoryIndexValue: React.Dispatch<React.SetStateAction<number>>;
  imageHistory: ImageData[][];
  setImageHistoryValue: React.Dispatch<React.SetStateAction<ImageData[][]>>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider: React.FC<ImageProviderProps> = ({ children }) => {
  const [imageSearch, setImageSearch] = useState<string>("");
  const [bottleImages, setBottleImages] = useState<ImageData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imageHistory, setImageHistory] = useState<ImageData[][]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState<number>(-1);

  

  const setImageSearchValue: React.Dispatch<React.SetStateAction<string>> = (value) => {
    setImageSearch(value);
  };

const setImageHistoryValue: React.Dispatch<React.SetStateAction<ImageData[][]>> = (value) => {
  setImageHistory(value);
};

  const setBottleImagesValue: React.Dispatch<React.SetStateAction<ImageData[]>> = (value) => {
    setBottleImages(value);
  };
  const setCurrentPageValue: React.Dispatch<React.SetStateAction<number>> = (value) => {
    setCurrentPage(value);
  };
  const setCurrentHistoryIndexValue: React.Dispatch<React.SetStateAction<number>> = (value) => {
    setCurrentHistoryIndex(value);
  };

  const contextValue: ImageContextType = {
    imageSearch,
    setImageSearchValue,
    bottleImages,
    setBottleImagesValue,
    currentPage,
    setCurrentPageValue,
    imageHistory,
    setImageHistoryValue,
    currentHistoryIndex,
    setCurrentHistoryIndexValue,
  };

  return <ImageContext.Provider value={contextValue}>{children}</ImageContext.Provider>;
};

export const useImageContext = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
