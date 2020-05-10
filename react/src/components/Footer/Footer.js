import React from "react";
import Class from "classnames";

import "./Footer.scss";
import { Emoji } from "~components/Emoji";

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  
  return (
    <footer className={Class("Footer")}>
      <div className={Class("Footer__Container")}>
        <div className={Class("Footer__Text")}>
          boSite
          <Emoji classs="Footer__" emojiClass="Emoji__Heart" label="heart" />
          {currentYear}
        </div>
      </div>
    </footer>
  );
}
