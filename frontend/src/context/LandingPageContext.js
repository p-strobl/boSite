import React, { createContext, useContext } from "react";

export default function LandingPageContext() {
  const activePageCount = window.location.href;
  createContext({
    pageAmount: activePageCount,
  });
}