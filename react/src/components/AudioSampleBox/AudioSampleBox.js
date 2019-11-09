import React from "react";
import Class from "classnames";

import "./AudioSampleBox.scss";
import { useTitle } from "hookrouter";
import { Emoji } from "~components/Emoji";
import { Headline } from "~components/Headline";
import { AudioSampleBoxProvider } from "~components/AudioSampleBox/AudioSampleBoxProvider";

export function AudioSampleBox() {
  useTitle("boSite's Audio Sample");

  const emojiMusicNote = <Emoji classs="AudioSampleBoxHeadline__" emojiClass="Emoji__MusicNote" label="music note" />;
  const headline = <h1 className={Class("AudioSampleBox__Headline")}>Audio Sample Box</h1>;
  const subHeadline = <h2 className={Class("AudioSampleBox__SubHeadline")}>Pick a audio sample {emojiMusicNote}</h2>;

  return (
    <div className="AudioSampleBox">
      <Headline parentClass="Main" h1={headline} h2={subHeadline} />
      <AudioSampleBoxProvider />
    </div>
  );
}
