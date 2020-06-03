import React, { useContext } from "react";
import { useRoutes } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { LandingPage } from "~components/LandingPage";
import { TissuePriceCompare } from "~components/TissuePriceCompare";
import { AudioSampleBox } from "~components/AudioSampleBox";
import { RecipesPage } from "~components/RecipesPage";
import { PageNotFound } from "~components/404-PageNotFound";

export function Routes() {
  const routerContext = useContext(RouterContext);
  const landingPage = () => {
    return <LandingPage />;
  };
  const tissueCounterPage = () => {
    return <TissuePriceCompare />;
  };
  const audioSampleBox = () => {
    return <AudioSampleBox />;
  };
  const recipesPage = () => {
    return <RecipesPage />;
  };
  const routes = {
    [routerContext.routes.home.path]: landingPage,
    [routerContext.routes.tissueCounter.path]: tissueCounterPage,
    [routerContext.routes.audioSampleBox.path]: audioSampleBox,
    [routerContext.routes.recipes.path]: recipesPage,
  };
  const usedRoutes = useRoutes(routes);

  return usedRoutes || <PageNotFound />;
}
