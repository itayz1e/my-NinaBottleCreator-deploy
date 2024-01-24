// ** style Imports
import "../style/pagesStyle/App.scss";
import "../style/props/message.scss";
import "../style/featuresStyle/ImageSelection.scss";
import "../style/featuresStyle/metaData.scss";

// ** Components Imports
import ImageSelection from "../components/features/ImageSelection";
import SpiritTypeId from "../components/features/SpiritTypeId";
import MetaData from "../components/features/MetaData";
import Layout from "../components/Layout/Layout ";

// ** React Imports
import { useState } from "react";

// ** Model Imports

// ** Third Party Imports
import { errorsService } from "../services/GlobalServices/GlobalErrorsService";
import { submitFormData } from "../services/Http_Services/httpClient";
import {
  handleFormSubmission,
  useFormInitialState,
} from "../services/Http_Services/form_service";

function App() {
  const { formData, setFormData } = useFormInitialState();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [Message, setMessage] = useState<string>("");

  const handleInputChange = (name: string, value: string | number) => {
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    
    handleFormSubmission(
      ev,
      formData,
      setErrorMessage,
      setMessage,
      errorsService,
      submitFormData
    );
  };

  return (
    <Layout isAuthenticated={true}>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div className="component-container-top">
            <ImageSelection onInputChange={handleInputChange} />
          </div>
          <div className="component-container-bottom">
            <div className="component-container-bottom-left">
              <SpiritTypeId onInputChange={handleInputChange} />
            </div>
            <div className="component-container-bottom-right">
              <MetaData onInputChange={handleInputChange} />
              <div>
                <button className="btn-submit" type="submit">
                  Submit
                </button>
              </div>
              <div className="err-container">
                {errorMessage ? (
                  <div className="error">{errorMessage}</div>
                ) : (
                  <div className="success">{Message}</div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default App;
