import "./App.css";
import "inter-ui/inter.css";

import React, { useState, useEffect, createRef } from "react";

import { Transition } from "@tailwindui/react";

import BoffeyOverview from "./BoffeyOverview";
import Navigation from "./Navigation";
import HomeaseOverview from "./HomeaseOverview";

import { db } from "../Services/Firebase";
import WorkOverview from "./WorkOverview";
import ApiView from "./ApiView";

function App() {
  const [appeared, setAppeared] = useState(false); //initially set to false to allow for change on mount

  const scrollRef = createRef();
  const homeRef = createRef();
  const workRef = createRef();
  const educationRef = createRef();
  const apiRef = createRef();

  useEffect(() => {
    setTimeout(() => {
      setAppeared(true);
    }, 150);
  }, []); //empty dependency array - runs on mount i.e. ComponentDidMount()

  useEffect(() => {
    console.log(homeRef);
  }, [homeRef]);

  return (
    <div
      className="app"
      class={`bg-gray-100 relative w-screen h-screen overflow-y-auto overflow-x-hidden
      }`}
      ref={scrollRef}
    >
      <Navigation
        homeRef={homeRef}
        workRef={workRef}
        educationRef={educationRef}
        apiRef={apiRef}
        scrollRef={scrollRef}
      />

      <Transition
        show={appeared}
        enter="transition-all duration-500"
        enterFrom="opacity-0 -my-9"
        enterTo="opacity-100 my-0"
        leave="transition-all duration-500"
        leaveTo="opacity 0"
      >
        <div ref={homeRef}>
          <BoffeyOverview />
        </div>

        <div ref={apiRef}>
          <ApiView />
        </div>

        <div ref={workRef}>
          <HomeaseOverview />
        </div>

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
