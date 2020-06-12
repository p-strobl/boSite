import React from "react";
import { useTitle } from "hookrouter";

import { SiteTiles } from "~components/SiteTiles";
import { Headline } from "~components/Headline";
import { Emoji } from "~components/Emoji";

import "./LandingPages.scss";

export const LandingPage = () => {
  useTitle("boSite's Home");

  const uiClasses = {
    landingPageContainer: "LandingPage__Container",
    landingPageHeadline: "LandingPage__Headline",
    landingPageSubHeadline: "LandingPage__SubHeadline",
    emojiHeart: "Emoji__Heart",
    main: "Main",
  };

  const emojiHeart = (
    <Emoji classs={uiClasses.landingPageHeadline} emojiClass={uiClasses.emojiHeart} label="heart" />
  );
  const headline = <h1 className={uiClasses.landingPageHeadline}>boSite&apos;s Toolbox</h1>;
  const subHeadline = (
    <h2 className={uiClasses.landingPageSubHeadline}>
      use my little {emojiHeart} tools as you like
    </h2>
  );

  return (
    <>
      <Headline parentClass={uiClasses.main} h1={headline} h2={subHeadline} />
      <div className={uiClasses.landingPageContainer}>
        <SiteTiles />
      </div>
    </>
  );
};
