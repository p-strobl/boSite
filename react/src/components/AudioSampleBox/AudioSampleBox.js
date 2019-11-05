import React, { useState } from "react";
import Class from "classnames";

import "./AudioSampleBox.scss";
import { useTitle } from "hookrouter";
import { Emoji } from "~components/Emoji";
import { Headline } from "~components/Headline";
import { SiteTiles } from "~components/SiteTiles";

export function AudioSampleBox() {
  useTitle("boSite's Audio Sample");

  const emojiMusicNote = <Emoji classs="AudioSampleBoxHeadline__" emojiClass="Emoji__MusicNote" label="music note" />;
  const headline = <h1 className={Class("AudioSampleBox__Headline")}>Audio Sample Box</h1>;
  const subHeadline = <h2 className={Class("AudioSampleBox__SubHeadline")}>Pick a audio sample {emojiMusicNote}</h2>;

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
    <div className="AudioSampleBox">
      <Headline parentClass="Main" h1={headline} h2={subHeadline} />
      <div className="AudioSampleBox__Container">
        <select name="samples" onChange={chooseCategory}>
          <option value="">--Bitte wählen Sie eine Audio Kategorie--</option>
          <option value="kitchen">Küche</option>
          <option value="household">Haushalt</option>
        </select>
        <div className="AudioSampleBox__OutputContainer">{sample}</div>
      </div>
    </div>
  );
}
