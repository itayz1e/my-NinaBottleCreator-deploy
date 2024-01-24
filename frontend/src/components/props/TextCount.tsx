// ** React Imports
import { useState } from "react";

// ** Model Imports
import { MetaDataProps } from "../../Models/interface";

function TextCount({ onInputChange }: MetaDataProps) {
  const [text, setText] = useState("");
  const [currentWordCount, setCurrentWordCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    const newWordCount = newText.length;

    if (newWordCount <= 100) {
      setText(newText);
      setCurrentWordCount(newWordCount);
      handleDescriptionChange(event);
    }
  };

  const handleDescriptionChange = (e: any) => {
    onInputChange("description", e.target.value);
  };
  return (
    <div>
      <textarea
        className="input-description"
        name="myTextArea"
        value={text}
        onChange={handleChange}
      ></textarea>
      <span>
        {currentWordCount} {currentWordCount === 0 ? "" : ""} / 100 characters
      </span>
    </div>
  );
}

export default TextCount;
