// ** style Imports
import "../../style/featuresStyle/metaData.scss";
import "../../style/props/icons.scss";

// ** Third Party Imports
import IsoCode from "./IsoCode";
import Icon_Vector from "../../assets/icons/Icon_Vector";
import Description from "./Description";
import InputOptional from "../Optional/InputOptional";
import { MetaDataProps } from "../../Models/interface";

function MetaData({ onInputChange }: MetaDataProps) {
  return (
    <div>
      <div className="title-MetaData">
        <Icon_Vector />
        <h1>META DATA</h1>
      </div>
      <div className="metadata-container">
        <div className="description-field">
          <Description onInputChange={onInputChange} />
        </div>
        <div className="ISO-field">
          <IsoCode onInputChange={onInputChange} />
        </div>
        <div className="inputOptionalContainer">
          <InputOptional onInputChange={onInputChange} />
        </div>
      </div>
    </div>
  );
}
export default MetaData;
