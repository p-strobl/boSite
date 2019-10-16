import React, { useContext } from "react";
import { useRoutes } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { LandingPage } from "~components/LandingPage";
import { RecipesPage } from "~components/RecipesPage";
import { TissueCounter } from "~components/TissueCounter";
import { PageNotFound } from "~components/404-PageNotFound";

export function Routes() {
  const { home, recipes, tissueCounter } = useContext(RouterContext);
  const routes = {
    [home]: function landingPage() {
      return <LandingPage />;
    },
    [recipes]: function recipesPage() {
      return <RecipesPage />;
    },
    [tissueCounter]: function tissueCounterPage() {
      return <TissueCounter />;
    },
  };

  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}
