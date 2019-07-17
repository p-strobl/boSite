import uuidv4 from "uuid/v4";
import { A } from "hookrouter";
import React, { useContext } from "react";
import RouterContext from "../../../context/RouteContext";

export function LinkList() {
  const routes = useContext(RouterContext);
  return Object.entries(routes).map(([key, value]) => {
    return (
      <ul key={uuidv4()}>
        <li key={uuidv4()}>
          <A key={uuidv4()} href={value}>
            {key}
          </A>
        </li>
      </ul>
    );
  });
}
