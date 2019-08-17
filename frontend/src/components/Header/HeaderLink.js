import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import RouterContext from "Context/RouteContext";
import Class from "classnames";
import { A } from "hookrouter";

import "./HeaderLink.scss";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);

  const links = Object.entries(routes).map(([key, value]) => {
    return (
      <A className={Class(`link link__${key}`)} key={uuidv4()} href={value}>
        {key}
      </A>
    );
  });

  return <>{links}</>;
}
