import uuidv4 from "uuid/v4";
import React, { useContext } from "react";
import Class from "classnames";
import { A } from "hookrouter";

import RouterContext from "~context/RouteContext";
import { Images } from "~assets/images";

import "./HeaderLink.scss";

export function HeaderLinkList() {
  const routes = useContext(RouterContext);
  const links = Object.entries(routes).map(([key, value]) => {
    return (
      <div className={Class("link-wrapper")} key={uuidv4()}>
        <A
          className={Class(`link link__${key}`)}
          key={uuidv4()}
          href={value}
          title={`Back to ${key}`}>
          <img
            className={Class("link__image")}
            src={Images[key]}
            alt={`${key} icon`}
            key={uuidv4()}
          />
          <div>{key}</div>
        </A>
      </div>
    );
  });

  return <>{links}</>;
}
