import React, { useContext } from "react";
import { useRoutes } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { LandingPage } from "~components/LandingPage";
import { RecipesPage } from "~components/RecipesPage";
import { TissuePriceCompare } from "~components/TissuePriceCompare";
import { PageNotFound } from "~components/404-PageNotFound";

export function Routes() {
  const routerContext = useContext(RouterContext);
  const landingPage = () => {
    return <LandingPage />;
  };
  const recipesPage = () => {
    return <RecipesPage />;
  };
  const tissueCounterPage = () => {
    return <TissuePriceCompare />;
  };
  const routes = {
    [routerContext.routes.home.path]: landingPage,
    [routerContext.routes.recipes.path]: recipesPage,
    [routerContext.routes.tissueCounter.path]: tissueCounterPage,
  };
  const usedRoutes = useRoutes(routes);

  return usedRoutes || <PageNotFound />;
}
