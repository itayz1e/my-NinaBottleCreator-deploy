// ** style Imports
import "../../style/props/icons.scss";
import "../../style/featuresStyle/TypeSpirit.scss";

// ** Model Imports
import { TypeSpiritProps } from "../../Models/interface";

// ** React Imports
import { Oval } from "react-loader-spinner";

// ** Third Party Imports
import { useTypeSpiritState } from "../../services/Http_Services/TypeSpirit_service";
import Icon_Vector_393 from "../../assets/icons/Icon_Vector_393";
import { useTypeSpiritApi } from "../../services/Http_Services/httpClient";

function SpiritTypeId({ onInputChange }: TypeSpiritProps) {
  const { selectedData, handleIconClick } = useTypeSpiritState(onInputChange);
  const { data, loading } = useTypeSpiritApi();

  return (
    <>
      <div className="title-SPIRIT-TYPE">
        <Icon_Vector_393 />
        <h1>SPIRIT TYPE</h1>
      </div>
      {loading ? (
        <div className="loading-container">
          <Oval height={130} width={130} color="white" />
        </div>
      ) : (
        <div className="type-spirit-container">
          <div className="section-type">
            {data.map(({ name, id }) => (
              <div key={id} className="feature">
                <button
                  className={`button-type ${
                    selectedData === id ? "button-type-selected" : ""
                  }`}
                  onClick={() => handleIconClick(id)}
                  type="button"
                >
                  {name}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SpiritTypeId;

