import React, { useState } from "react";

import { DownloadIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";

import { Transition } from "@tailwindui/react";
import { fetchResume } from "../Services/StorageServices";

function Navigation(props) {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [fetchingResume, setFetchingResume] = useState(false);

  const toggleMenu = () => {
    setMenuExpanded((prev) => !prev);
  };

  const handleGetResume = () => {
    setFetchingResume(true);
    fetchResume((success) => {
      setFetchingResume(false);
    });
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      block: "center",
    });
  };

  return (
    <>
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
            <button
              onClick={handleGetResume}
              class="flex space-x-2 hover:text-gray-800 border-gray-300 border rounded-xl px-2 py-2"
            >
              <p>Download Resume</p>
              <DownloadIcon class="h-6 text-gray-500" />
            </button>
          </div>
        </div>
      </Transition>
      <div class="">
        <nav
          class={`fixed top-0 w-screen z-10 bg-gray-100
           transition-all ease-in-out duration-150 `}
        >
          <div class="mx-4 p-2 py-4">
            <div class="flex justify-between items-center">
              <button
                onClick={() => handleScroll(props.homeRef)}
                class=" text-gray-800 hover:text-gray-900 cursor-pointer text-left text-sm"
              >
                <p>Jed Boffey</p>
                <p class="text-gray-400">Full-stack Engineer</p>
              </button>

              <div class="hidden md:flex space-x-7 font-regular text-sm text-gray-600 hover:text-gray-700">
                <button onClick={() => handleScroll(props.educationRef)}>
                  Education
                </button>

                <button onClick={() => handleScroll(props.workRef)}>
                  Work
                </button>

                <button>Contact</button>
              </div>

              <div class="hidden md:flex space-x-4 text-sm font-medium text-gray-600">
                <button
                  onClick={handleGetResume}
                  class="flex space-x-2 hover:text-gray-800 bg-gray-200 border rounded-2xl px-3 py-2"
                >
                  <p>Download Resume</p>
                  <DownloadIcon class="h-5 text-gray-400" />
                </button>
              </div>

              <button class="md:hidden flex items-center" onClick={toggleMenu}>
                <MenuIcon class="h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
