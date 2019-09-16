import React from "react";
import { useTitle } from "hookrouter";

import { SiteTiles } from "~components/SiteTiles";

export const LandingPage = () => {
  useTitle("Bo's Home");

  return <SiteTiles />;
};
