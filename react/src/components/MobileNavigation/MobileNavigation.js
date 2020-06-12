import React from "react";

import "./MobileNavigation.scss";
import { NavigationLinkList } from "~components/Navigation/NavigationLinkList";

export function MobileNavigation() {
  const uiClasses = {
    navigation: "MobileNavigation",
    wrapper: "MobileNavigation__Wrapper",
    toggleButtonWrapper: "MobileNavigation__ToggleButtonWrapper",
    toggleButton: "MobileNavigation__ToggleButton",
    buttonOpen: "MobileNavigation__ToggleButton--Open",
    linkList: "MobileNavigation__LinkList",
    linkListActive: "MobileNavigation__LinkList--Active",
  };

  const toggleButtonHandler = (event) => {
    if (event.target.type !== "button") return;

    const navigationButton = event.target;
    const navigationWrapper = event.target.closest(`.${uiClasses.wrapper}`);
    const navigationLinkList = navigationWrapper.querySelector(`.${uiClasses.linkList}`);

    navigationButton.classList.toggle(`${uiClasses.buttonOpen}`);
    navigationLinkList.classList.toggle(`${uiClasses.linkListActive}`);
  };

  return (
    <nav className={uiClasses.navigation}>
      <div className={uiClasses.wrapper}>
        <div className={uiClasses.toggleButtonWrapper}>
          <button
            aria-label="Mobile Menu Button"
            className={uiClasses.toggleButton}
            onClick={toggleButtonHandler}
            type="button"
          />
        </div>
        <div className={uiClasses.linkList}>
          <NavigationLinkList />
        </div>
      </div>
    </nav>
  );
}
