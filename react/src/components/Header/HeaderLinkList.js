import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import { usePath } from "hookrouter";
import RouterContext from "~context/RouteContext";

import { HeaderLink } from "./HeaderLink";

import "./HeaderLinkList.scss";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);
  const currentPath = usePath();
  const links = Object.entries(routes).map(([key, value]) => {
    return (
      <HeaderLink
        key={uuidv4()}
        linkList={key}
        currentPath={currentPath}
        routePath={value}
      />
    );
  });

  return <>{links}</>;
}
