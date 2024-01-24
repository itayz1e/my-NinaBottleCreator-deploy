// ** style Imports
import "../style/pagesStyle/login.scss";
import "../style/props/message.scss";

// ** React Imports
import React, { useState, useEffect } from "react";

// ** Model Imports
import { LoginProps } from "../Models/interface";

// ** Imports authorization
import { handlePasswordSubmit } from "../services/Http_Services/login_service";

// ** Third Party Imports
import Layout from "../components/Layout/Layout ";

const Login = ({ children }: LoginProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setIsAuthenticated(true);
    }
    const expirationTime = 24 * 60 * 60 * 1000;
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
      setErrorMessage("You need to log in again after 24 hours")
    }, expirationTime);
  }, []);


  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await handlePasswordSubmit(e, password, setErrorMessage);
  
      if (response && response.token) {
        const token = response.token;
        localStorage.setItem("accessToken", token);
        setIsAuthenticated(true);
  

        const expirationTime = 24 * 60 * 60 * 1000;
        setTimeout(() => {
          localStorage.removeItem("accessToken");
          setIsAuthenticated(false);
        }, expirationTime);
      }
    } catch (error: any) {
     if (error.response && error.response.status === 500) {
      setErrorMessage("Server Error (500)");
    } else {
      setErrorMessage("Password is invalid. Please try again.");
    }
  }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <Layout isAuthenticated={true}>
      <div>
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit}>
            <label className="label">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
            </label>
            <button type="submit" className="button">
              Log in
            </button>
            {errorMessage && <div className="error">{errorMessage}</div>}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
