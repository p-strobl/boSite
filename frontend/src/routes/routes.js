import React, { useContext } from "react";
import PropType from "prop-types";
import { useRoutes } from "hookrouter";

import RouterContext from "Context/RouteContext";

import LandingPage from "Components/LandingPage/LandingPage";
import Recipes from "Components/Recipes/Recipes";
import { PageNotFound } from "Components/404-PageNotFound/404-PageNotFound";

export function Routes() {
  const { home, recipes } = useContext(RouterContext);
  const routes = {
    [home]: () => <LandingPage />,
    [recipes]: () => <Recipes />,
  };
  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}

Routes.PropType = {
  routes: PropType.object,
};
