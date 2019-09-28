import React from "react";
import { useTitle } from "hookrouter";

import { SiteTiles } from "~components/SiteTiles";
import { Headline } from "~components/Headline";
import { Emoji } from "~components/Emoji";

export const LandingPage = () => {
  useTitle("Bo's Home");
  return (
    <>
      <Headline
        h1="boSite's Project"
        h2="use my little tools as you like"
        emoji={<Emoji emoji="❤️" label="heart" />}
      />
      <SiteTiles />
    </>
  );
};
