import React from "react";
import Class from "classnames";

import "./AudioSampleBox.scss";
import { useTitle } from "hookrouter";
import { Emoji } from "~components/Emoji";
import { Headline } from "~components/Headline";
import { SiteTiles } from "~components/SiteTiles";

export function AudioSampleBox() {
  useTitle("boSite's Audio Sample");

  const emoji = <Emoji classs="AudioSampleBoxHeadline__" emojiClass="Emoji__Headphone" label="heart" />;
  const headline = <h1 className={Class("AudioSampleBox__Headline")}>boSite&apos;s Toolbox</h1>;
  const subHeadline = <h2 className={Class("AudioSampleBox__SubHeadline")}>use my little {emoji} tools as you like</h2>;

  return (
    <>
      {/*<Headline parentClass="Main" h1={headline} h2={subHeadline} />*/}
      {/*<div className="AudioSampleBox__Container">*/}
      {/*  <SiteTiles />*/}
      {/*</div>*/}
    </>
  );
}
