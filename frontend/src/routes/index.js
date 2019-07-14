import React from "react";
import { useRoutes } from "hookrouter";

import LandingPage from "../components/c-001-LandingPage";
import Recipes from "../components/c-002-Recipes";
import PageNotFound from "../components/404-PageNotFound";

const routes = {
  "/": () => <LandingPage />,
  "/recipes": () => <Recipes />,
};

export default function AppRoutes() {
  const usedRoutes = useRoutes(routes);
  return usedRoutes || <PageNotFound />;
}
