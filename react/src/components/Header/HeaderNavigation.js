import React, { useEffect, useRef } from "react";
import Class from "classnames";

import "./HeaderNavigation.scss";

import { determineIfTouchDevice } from "~src/helper/Utilities";
import { HeaderLinkList } from "./HeaderLinkList";

export function HeaderNavigation() {

  const headerNavigationRef = useRef(null);
  let header = null;
  let headerNavigation = null;
  let observer = null;
  let sheet = document.styleSheets[0];

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
      threshold: [1],
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
      headerNavigation = headerNavigationRef.current;
      header = headerNavigation.closest(".Header");
      
      initIntersectionObserver();
  
      return () => {
        clearIntersectionObserver();
      };
    }
  }, []);
  
  return (
    <nav className={Class("Header__Navigation")} ref={headerNavigationRef}>
      <HeaderLinkList />
    </nav>
  );
}
