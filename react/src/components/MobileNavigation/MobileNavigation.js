import React from "react";

import "./MobileNavigation.scss";
import { NavigationLinkList } from "~components/Navigation/NavigationLinkList";

export function MobileNavigation() {
  const toggleButtonHandler = (event) => {
    if (event.target.type !== "button") return false;

    const navigationButton = event.target;
    const navigationWrapper = event.target.closest(".MobileNavigation__Wrapper");
    const navigationLinkList = navigationWrapper.querySelector(".MobileNavigation__LinkList");

    navigationButton.classList.toggle("MobileNavigation__ToggleButton--Open");
    navigationLinkList.classList.toggle("MobileNavigation__LinkList--Active");
  };

  return (
    <nav className="MobileNavigation">
      <div className="MobileNavigation__Wrapper">
        <div className="MobileNavigation__ToggleButtonWrapper">
          <button
            aria-label="Mobile Menu Button"
            className="MobileNavigation__ToggleButton"
            onClick={toggleButtonHandler}
            type="button"
          />
        </div>
        <div className="MobileNavigation__LinkList">
          <NavigationLinkList />
        </div>
      </div>
    </nav>
  );
}
