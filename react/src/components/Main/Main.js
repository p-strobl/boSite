import React from "react";

import "./Main.scss";

import { Routes } from "~routes/routes";

export function Main() {
  const uiClasses = {
    main: "Main",
  };

  return (
    <main className={uiClasses.main}>
      <Routes />
    </main>
  );
}
