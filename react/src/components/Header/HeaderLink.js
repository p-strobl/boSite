import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";

import RouterContext from "~context/RouteContext";

import "./HeaderLink.scss";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);

  const links = Object.entries(routes).map(([key, value]) => {
    const linkText = key.replace(/([a-zA-Z])(?=[A-Z])/g, " ");

    return (
      <div className={Class("link-wrapper")} key={uuidv4()}>
        <A
          className={Class(`link link__${key}`)}
          href={value}
          title={`Back to ${key}`}
          key={uuidv4()}>
          <div>{linkText}</div>
        </A>
      </div>
    );
  });

  return <>{links}</>;
}
