import React from "react";

import { Navigation } from "../components/c-003-Navigation";
import { Routes } from "../routes";
import { Footer } from "../components/c-004-Footer";

export function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
