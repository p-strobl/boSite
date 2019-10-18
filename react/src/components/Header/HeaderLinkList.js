import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import { usePath } from "hookrouter";

import RouterContext from "~context/RouteContext";

import { HeaderLink } from "./HeaderLink";

import "./HeaderLinkList.scss";

export function HeaderLinkList() {
  const routerContext = useContext(RouterContext);
  const currentPath = usePath();
  const headerLinks = Object.entries(routerContext.routes).map(([routeObjectKey, routeObjectValue]) => {
    return (
      <HeaderLink
        key={uuidv4()}
        linkList={routeObjectKey}
        currentPath={currentPath}
        routePath={routeObjectValue.path}
        routeTitle={routeObjectValue.title}
      />
    );
  });

  return <>{headerLinks}</>;
}
