import React, { useContext } from "react";
import { useRoutes } from "hookrouter";
import RouterContext from "../context/RouteContext";

import LandingPage from "../components/c-001-LandingPage";
import Recipes from "../components/c-002-Recipes";
import PageNotFound from "../components/404-PageNotFound";

export function Routes() {
  const { home, recipes } = useContext(RouterContext);
  const routes = {
    [home]: () => <LandingPage />,
    [recipes]: () => <Recipes />,
  };
  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}
