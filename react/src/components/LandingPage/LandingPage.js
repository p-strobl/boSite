import React from "react";
import { useTitle } from "hookrouter";

import { LandingItems } from "./LandingItems";

export const LandingPage = () => {
  useTitle("Bo's Home");

  return <LandingItems />;
};
