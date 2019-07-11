import React from "react";
import { useRoutes } from "hookrouter";

import Home from "./Home";
import Recipes from "./Recipes";
import PageNotFound from "./PageNotFound";

const routes = {
  "/": () => <Home />,
  "/recipes": () => <Recipes />,
};

export default function AppRoutes() {
  console.log(routes);
  const usedRoutes = useRoutes(routes);

  return usedRoutes || <PageNotFound />;
}
