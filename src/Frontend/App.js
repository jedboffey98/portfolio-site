import "./App.css";
import "inter-ui/inter.css";

import React, { useState, useEffect } from "react";

import { Transition } from "@tailwindui/react";

import BoffeyOverview from "./BoffeyOverview";
import Navigation from "./Navigation";
import HomeaseOverview from "./HomeaseOverview";

import { db } from "../Services/Firebase";
import WorkOverview from "./WorkOverview";
import ApiView from "./ApiView";

function App() {
  const [appeared, setAppeared] = useState(false); //initially set to false to allow for change on mount

  useEffect(() => {
    setTimeout(() => {
      setAppeared(true);
    }, 150);
  }, []); //empty dependency array - runs on mount i.e. ComponentDidMount()

  return (
    <div
      className="app"
      class={`bg-gray-100 relative w-screen h-screen overflow-y-auto overflow-x-hidden
      }`}
    >
      <Navigation />

      <Transition
        show={appeared}
        enter="transition-all duration-500"
        enterFrom="opacity-0 -my-9"
        enterTo="opacity-100 my-0"
        leave="transition-all duration-500"
        leaveTo="opacity 0"
      >
        <BoffeyOverview />

        <ApiView />

        <HomeaseOverview />

        <WorkOverview />
      </Transition>

      {/*<div class="w-screen h-screen text-center">
          <AboutMe
            onClick={() => menuExpanded && setMenuExpanded(false)}
            class=""
          />
          <Showcase />
        </div>*/}
    </div>
  );
}

export default App;
