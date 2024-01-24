// ** React Imports
import { useState } from "react";

export const useTypeSpiritState = (onInputChange: (name: string, value: string) => void) => {
    const [selectedData, setSelectedData] = useState<string | null>(null);
  
    const handleIconClick = (id: string) => {
      if (selectedData === id) {
        setSelectedData(null);
        onInputChange("spiritTypeId", "");
      } else {
        setSelectedData(id);
        onInputChange("spiritTypeId", id);
      }
    };
  
    return { selectedData, handleIconClick };
  };