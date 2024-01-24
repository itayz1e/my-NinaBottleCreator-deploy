// ** Third Party Imports
import { MetaDataProps } from "../../Models/interface";

function IsoCode({ onInputChange }: MetaDataProps) {
  const handleIsoCodeChange = (e: any) => {
    onInputChange("isoCode", e.target.value);
  };
  return (
    <div className="ISO-container">
      <h1>ISO Code</h1>
      <input className="input-ISO" onChange={handleIsoCodeChange}></input>
    </div>
  );
}

export default IsoCode;
