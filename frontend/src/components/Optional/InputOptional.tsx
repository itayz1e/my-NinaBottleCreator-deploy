// ** style Imports
import { MetaDataProps } from "../../Models/interface";
import "../../style/props/input.scss";

const nameInput = [
  { name: "companyEstablishmentYear" },
  { name: "alcoholPercentage" },
  { name: "caloriesPerOneOz" },
  { name: "countryOfOrigin" },
  { name: "manufacturer" },
  { name: "orderUrl" },
  { name: "name" },
];

function InputOptional({ onInputChange }: MetaDataProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    onInputChange(id, value); // Passes the input ID and value to onInputChange
  };
  return (
    <div className="inputOptional">
      {nameInput.map((input, index) => (
        <div key={index}>
          <input
            className="inputOp"
            type="text"
            id={input.name}
            name={input.name}
            onChange={handleInputChange}
          />
          <label htmlFor={input.name} className="labelOp">
            {input.name}
          </label>
        </div>
      ))}
    </div>
  );
}

export default InputOptional;
