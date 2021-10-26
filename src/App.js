import "./App.css";
import "inter-ui/inter.css";

import React, { useState, useEffect } from "react";

import { Transition } from "@tailwindui/react";

import BoffeyOverview from "./BoffeyOverview";
import Navigation from "./Navigation";
import HomeaseOverview from "./HomeaseOverview";

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [appeared, setAppeared] = useState(false); //initially set to false to allow for change on mount

  useEffect(() => {
    setTimeout(() => {
      setAppeared(true);
    }, 150);
  }, []); //empty dependency array - runs on mount i.e. ComponentDidMount()

  const toggleMenu = () => {
    setMenuExpanded((prev) => !prev);
  };

  const scrollRef = React.createRef();
  const onScroll = () => {
    setScrolled(scrollRef.current.scrollTop > 20 ? true : false);
  };

  return (
    <div
      className="app"
      class={`bg-gray-100 relative w-screen h-screen overflow-y-auto overflow-x-hidden
      }`}
      ref={scrollRef}
      onScroll={onScroll}
    >
      <Navigation scrollRef={scrollRef} />

      <Transition
        show={appeared}
        enter="transition-all duration-500"
        enterFrom="opacity-0 -my-3"
        enterTo="opacity-100 my-0"
        leave="transition-all duration-500"
        leaveTo="opacity 0"
      >
        <BoffeyOverview />

        <HomeaseOverview />
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
