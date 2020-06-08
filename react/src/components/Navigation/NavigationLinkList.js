import uuid from "uuid/v4";
import React, { useContext } from "react";
import { usePath } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { NavigationLink } from "./NavigationLink";

import "./NavigationLinkList.scss";

export function NavigationLinkList() {
  const routerContext = useContext(RouterContext);
  const currentPath = usePath();
  const navigationLinks = Object.entries(routerContext.routes).map(
    ([routeObjectKey, routeObjectValue]) => {
      return (
        <NavigationLink
          key={uuid()}
          linkList={routeObjectKey}
          currentPath={currentPath}
          routePath={routeObjectValue.path}
          routeTitle={routeObjectValue.title}
        />
      );
    },
  );

  return <>{navigationLinks}</>;
}
