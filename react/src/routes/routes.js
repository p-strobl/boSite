import React, { useContext } from "react";
import { useRoutes } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { LandingPage } from "~components/LandingPage";
import { RecipesPage } from "~components/RecipesPage";
import { PageNotFound } from "~components/404-PageNotFound";
import { PaperCounter } from "~components/PaperCounter";

export function Routes() {
  const { home, recipes, paperCounter } = useContext(RouterContext);
  const routes = {
    [home]: () => <LandingPage />,
    [recipes]: () => <RecipesPage />,
    [paperCounter]: () => <PaperCounter />,
  };

  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}
