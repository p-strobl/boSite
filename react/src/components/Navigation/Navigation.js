import React, { useEffect, useRef } from "react";
import Class from "classnames";

import "./Navigation.scss";

import { determineIfTouchDevice } from "~src/helper/Utilities";
import { NavigationLinkList } from "./NavigationLinkList";

export function Navigation() {

  const navigationRef = useRef(null);
  let header = null;
  let headerNavigation = null;
  let observer = null;
  let app = null;
  let mobileNavigation = null;
  let mobileNavigationButton = null;
  let navigationLinkList = null;
  
  function observerIsIntersecting(entries) {
    if (typeof entries === "undefined") return;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        mobileNavigation.classList.add("MobileNavigation--Active");
      } else {
        
        mobileNavigation.classList.remove("MobileNavigation--Active");
        mobileNavigationButton.classList.remove("MobileNavigation__ToggleButton--Open");
        navigationLinkList.classList.remove("MobileNavigation__LinkList--Active");
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

  useEffect(() => {
    if (determineIfTouchDevice()) {
      headerNavigation = navigationRef.current;
      header = headerNavigation.closest(".Header");
      app = headerNavigation.closest(".App");
      mobileNavigation = app.querySelector(".MobileNavigation");
      mobileNavigationButton = app.querySelector(".MobileNavigation__ToggleButton");
      navigationLinkList = app.querySelector(".MobileNavigation__LinkList");
      
      console.log('mobileNavigationButton', mobileNavigationButton);
      console.log('navigationLinkList', navigationLinkList);
      
      initIntersectionObserver();
  
      return () => {
        clearIntersectionObserver();
      };
    }
  }, []);
  
  return (
    <nav className={Class("Navigation")} ref={navigationRef}>
      <NavigationLinkList />
    </nav>
  );
}
