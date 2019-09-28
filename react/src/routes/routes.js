import React, { useContext } from "react";
import { useRoutes } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { LandingPage } from "~components/LandingPage";
import { RecipesPage } from "~components/RecipesPage";
import { PaperCounter } from "~components/PaperCounter";
import { PageNotFound } from "~components/404-PageNotFound";

export function Routes() {
  const { home, recipes, paperCounter } = useContext(RouterContext);
  const routes = {
    [home]: function landingPage() {
      return <LandingPage />;
    },
    [recipes]: function recipesPage() {
      return <RecipesPage />;
    },
    [paperCounter]: function paperCounterPage() {
      return <PaperCounter />;
    },
  };

  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}
