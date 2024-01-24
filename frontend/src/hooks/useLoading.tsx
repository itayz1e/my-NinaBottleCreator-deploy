// ** React Imports
import { useEffect, useState } from "react";

const useLoading = (isLoadingInitial = false) => {
  const [isLoading, setIsLoading] = useState(isLoadingInitial);

  useEffect(() => {
    const handleLoading = () => {
      setIsLoading(true);
    };

    handleLoading();
  }, []);

  return { isLoading, setIsLoading };
};

export default useLoading;