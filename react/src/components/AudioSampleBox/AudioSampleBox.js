import React from "react";
import Class from "classnames";

import "./AudioSampleBox.scss";
import { useTitle } from "hookrouter";
import { Emoji } from "~components/Emoji";
import { Headline } from "~components/Headline";
import { AudioSampleBoxProvider } from "./AudioSampleBoxProvider";
import AudioSampleBoxContextStore from "~context/AudioSampleContext";

export function AudioSampleBox() {
  useTitle("boSite's Audio SampleCollection");

  const uiClasses = {
    audioSampleBox: "AudioSampleBox",
    audioSampleBoxHeadline: "AudioSampleBoxHeadline",
    audioSampleBoxSubHeadline: "AudioSampleBox__SubHeadline",
    emojiMusicNote: "Emoji__MusicNote",
  };

  const label = {
    musicNote: "Music Note",
  };

  const emojiMusicNote = (
    <Emoji
      classs={`${uiClasses.audioSampleBoxHeadline}__`}
      emojiClass={uiClasses.emojiMusicNote}
      label={label.musicNote}
    />
  );
  const headline = (
    <h1 className={Class(`${uiClasses.audioSampleBoxHeadline}`)}>Audio Sample Box</h1>
  );
  const subHeadline = (
    <h2 className={Class(`${uiClasses.audioSampleBoxSubHeadline}`)}>
      Pick a audio sample {emojiMusicNote}
    </h2>
  );

  return (
    <div className={uiClasses.audioSampleBox}>
      <Headline parentClass={uiClasses.audioSampleBox} h1={headline} h2={subHeadline} />
      <AudioSampleBoxContextStore>
        <AudioSampleBoxProvider />
      </AudioSampleBoxContextStore>
    </div>
  );
}
