// ** Third Party Imports
import TextCount from "../props/TextCount";
import { MetaDataProps } from "../../Models/interface";

function Description({ onInputChange }: MetaDataProps) {
  return (
    <div>
      <h1 className="input-description-titel">Description</h1>
      <TextCount onInputChange={onInputChange} />
    </div>
  );
}

export default Description;


//discription