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

  function handleIntersection(entry) {
    if (typeof entry === "undefined") return;
    
    console.log('entry', entry);
  }

  function observerIsIntersecting(entries) {
    if (typeof entries === "undefined") return;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        console.log('out', );
        handleIntersection(entry);
      } else {
        console.log('in', );
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
