import React from "react";
import Class from "classnames";
import { useTitle } from "hookrouter";

import { SiteTiles } from "~components/SiteTiles";
import { Headline } from "~components/Headline";
import { Emoji } from "~components/Emoji";

import "./LandingPages.scss";

export const LandingPage = () => {
  useTitle("boSite's Home");

  const emojiHeart = <Emoji classs="LandingPageHeadline__" emojiClass="Emoji__Heart" label="heart" />;
  const headline = <h1 className={Class("LandingPage_Headline")}>boSite&apos;s Toolbox</h1>;
  const subHeadline = (
    <h2 className={Class("LandingPage_SubHeadline")}>use my little {emojiHeart} tools as you like</h2>
  );

  return (
    <>
      <Headline parentClass="Main" h1={headline} h2={subHeadline} />
      <div className="LandingPage__Container">
        <SiteTiles />
      </div>
    </>
  );
};
