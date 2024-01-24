// ** React Import
import React from "react";

// ** Third Party Imports
import { Globals } from "../GlobalServices/globals";
import { serverApi } from "../../server/api";

export const handlePasswordSubmit = async (
  e: React.FormEvent,
  password: any,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    e.preventDefault();
    const response = await serverApi.post(
      "/api/login/authorization-password",
      {password},
      {
        headers: {
          authorization: Globals.VITE_AUTHORIZATION,
        },
      }
      );
      if (response.data.token) {
        const token = response.data.token;
        localStorage.setItem('accessToken', token);
      }

      return response.data
  } catch (error: any) {
    setErrorMessage("Password is invalid. Please try again.");
  }
};

