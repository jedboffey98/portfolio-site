import "./App.css";
import "inter-ui/inter.css";

import React, { useState } from "react";

import { Transition } from "@tailwindui/react";

import { UserCircleIcon } from "@heroicons/react/outline";
import { DownloadIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";
import AboutMe from "./AboutMe";

function App() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded((prev) => !prev);
  };

  return (
    <div
      className="app"
      class={`bg-gray-100 relative w-screen h-screen ${
        menuExpanded ? "overflow-y-hidden" : "overflow-y-auto"
      }`}
    >
      <Transition
        show={menuExpanded}
        enter="transition-all duration-500"
        enterFrom="-mr-64"
        enterTo="mr-0"
        leave="transition-all duration-500"
        leaveTo="-mr-64"
        class="absolute top-0 right-0 z-50"
      >
        <div class="w-64 p-8 bg-gray-100 h-screen flex flex-col space-y-8 items-end filter drop-shadow-lg">
          <button onClick={toggleMenu}>
            <MenuIcon class="h-6 text-gray-600" />
          </button>
          <div class="flex flex-col space-y-3 items-end">
            <button>Experience</button>

            <button>Skills</button>

            <button>Education</button>

            <button>Contact</button>
          </div>

          <div>
            <button class="flex space-x-2 hover:text-gray-800 border-gray-300 border rounded-xl px-2 py-2">
              <p>Download Resume</p>
              <DownloadIcon class="h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </Transition>
      <div class="flex flex-col items-center">
        <nav class="absolute w-screen top-0">
          <div class="mx-4 p-2 py-4">
            <div class="flex justify-between items-center">
              <button class="flex space-x-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <UserCircleIcon class="h-7 text-blue-400" />
                <p class="font-medium text-lg">Jed Boffey</p>
              </button>

              <div class="hidden md:flex space-x-7 font-regular text-md text-gray-600 hover:text-gray-700">
                <button>Experience</button>

                <button>Skills</button>

                <button>Education</button>

                <button>Contact</button>
              </div>

              <div class="hidden md:flex space-x-4 text-md font-medium text-gray-600">
                <button class="flex space-x-2 hover:text-gray-800 border-gray-500 border rounded-xl px-2 py-2">
                  <p>Download Resume</p>
                  <DownloadIcon class="h-6 text-gray-500" />
                </button>
              </div>

              <button class="md:hidden flex items-center" onClick={toggleMenu}>
                <MenuIcon class="h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>

        <div
          class="h-screen bg-gray-100 md:max-w-screen-sm max-w-screen-sm mx-3"
          onClick={() => menuExpanded && setMenuExpanded(false)}
        >
          <AboutMe />
        </div>
      </div>
    </div>
  );
}

export default App;
