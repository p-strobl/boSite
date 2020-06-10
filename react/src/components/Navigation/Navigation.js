import React, { useEffect, useRef } from "react";
import Class from "classnames";

import "./Navigation.scss";

import { isTouchDevice } from "~src/helper/Utilities";
import { NavigationLinkList } from "./NavigationLinkList";

export function Navigation() {
  let observer;
  let header;
  let headerNavigation;
  let app;
  let mobileNavigation;
  let mobileNavigationButton;
  let navigationLinkList;

  const navigationRef = useRef(null);
  const uiClasses = {
    app: "App",
    header: "Header",
    headerNavigation: "",
    mobileNavigation: "MobileNavigation",
    mobileNavigationButton: "MobileNavigation__ToggleButton",
    mobileNavigationButtonOpen: "MobileNavigation__ToggleButton--Open",
    mobileNavigationActive: "MobileNavigation--Active",
    navigation: "Navigation",
    navigationLinkList: "MobileNavigation__LinkList",
    navigationLinkListActive: "MobileNavigation__LinkList--Active",
  };

  function observerIsIntersecting(entries) {
    if (typeof entries === "undefined") return;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        mobileNavigation.classList.add(uiClasses.mobileNavigationActive);
      } else {
        mobileNavigation.classList.remove(uiClasses.mobileNavigationActive);
        mobileNavigationButton.classList.remove(uiClasses.mobileNavigationButtonOpen);
        navigationLinkList.classList.remove(uiClasses.navigationLinkListActive);
      }
    });
  }

  function initIntersectionObserver() {
    observer = new IntersectionObserver(observerIsIntersecting, {
      threshold: [0],
    });

    observer.observe(headerNavigation);
  }

  function clearIntersectionObserver() {
    headerNavigation.forEach((element) => {
      if (typeof element === "undefined") return;

      observer.unobserve(element);
    });
  }

  const init = () => {
    headerNavigation = navigationRef.current;

    if (isTouchDevice()) {
      header = headerNavigation.closest(`.${uiClasses.header}`);
      app = headerNavigation.closest(`.${uiClasses.app}`);
      mobileNavigation = app.querySelector(`.${uiClasses.mobileNavigation}`);
      mobileNavigationButton = app.querySelector(`.${uiClasses.mobileNavigationButton}`);
      navigationLinkList = app.querySelector(`.${uiClasses.navigationLinkList}`);

      initIntersectionObserver();
    }
  };

  useEffect(() => {
    init();

    return () => {
      clearIntersectionObserver();
    };
  }, []);

  return (
    <nav className={Class(uiClasses.navigation)} ref={navigationRef}>
      <NavigationLinkList />
    </nav>
  );
}
