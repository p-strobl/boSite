import uuidv4 from "uuid/v4";
import { A } from "hookrouter";
import React, { useContext } from "react";
import RouterContext from "Context/RouteContext";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);
  const links = Object.entries(routes).map(([key, value]) => {
    return (
      <li key={uuidv4()}>
        <A key={uuidv4()} href={value}>
          {key}
        </A>
      </li>
    );
  });
  return <ul>{links}</ul>;
}
