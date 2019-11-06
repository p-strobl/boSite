import React, { useState } from "react";

export const AudioSampleBoxSelection = () => {
  const [sample, setSample] = useState(null);

  const chooseCategory = (option) => {
    switch (option.target.value) {
      case "kitchen":
        setSample(<div>Küche</div>);

        break;
      case "household":
        setSample(<div>Haushalt</div>);
        break;
      default:
        setSample("");
    }
  };

  return (
    <div className="AudioSampleBox__Container">
      <select name="samples" onChange={chooseCategory}>
        <option value="">--Bitte wählen Sie eine Audio Kategorie--</option>
        <option value="kitchen">Küche</option>
        <option value="household">Haushalt</option>
      </select>
      <div className="AudioSampleBox__OutputContainer">{sample}</div>
    </div>
  );
};
