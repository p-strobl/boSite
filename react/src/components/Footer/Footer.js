import React from "react";

import "./Footer.scss";
import { Emoji } from "~components/Emoji";

export function Footer() {
  const uiClasses = {
    footer: "Footer",
    footerContainer: "Footer__Container",
    footerText: "Footer__Text",
    emojiHeart: "Emoji__Heart",
  };

  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer className={uiClasses.footer}>
      <div className={uiClasses.footerContainer}>
        <div className={uiClasses.footerText}>
          boSite
          <Emoji classs={`${uiClasses.footer}__`} emojiClass={uiClasses.emojiHeart} label="heart" />
          {currentYear}
        </div>
      </div>
    </footer>
  );
}
