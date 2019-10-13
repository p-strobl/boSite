import React from "react";
import Class from "classnames";

import "./Footer.scss";
import { Emoji } from "~components/Emoji";

export function Footer() {
  return (
    <footer className={Class("Footer")}>
      <div className={Class("Footer__Container")}>
        <div className={Class("Footer__Text")}>
          boSite
          <Emoji emoji="❤️" label="heart" classs="Footer__ContainerEmoji" />
          2019
        </div>
      </div>
    </footer>
  );
}
