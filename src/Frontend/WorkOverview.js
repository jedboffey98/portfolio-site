import { Transition } from "@tailwindui/react";
import React, { useState, useEffect, createRef } from "react";
import useOnScreen from "../Hooks/useOnScreen";

import { fetchExperiences } from "../Services/ExperienceServices";
import ExperienceSection from "./ExperienceSection";

function WorkOverview() {
  const [experiences, setExperiences] = useState();
  const [show, setShow] = useState(false);

  const gridRef = createRef();
  const gridVisible = useOnScreen(gridRef);

  useEffect(() => {
    if (gridVisible) {
      setTimeout(() => {
        setShow(true);
        setTimeout(() => {
          fetchExperiences()
            .then((exp) => setExperiences(exp))
            .catch((error) => {
              console.log(error);
              setExperiences("error");
            });
        }, 500); //make skeletons visible for longer - engaging
      }, 250);
    }
  }, [gridVisible]);

  return (
    <div ref={gridRef} class="w-9/10 max-w-7xl min-h-800 mx-auto px-9 py-12">
      <div
        class={`grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 md:gap-y-16 transition-all duration-500 ${
          show ? "opacity-100" : "opacity-10"
        }`}
      >
        {experiences === "error" ? (
          <p class="text-sm font-semibold text-gray-700 h-18 w-full">
            Error loading experience. Try again!
          </p>
        ) : experiences !== undefined ? (
          experiences.map((w) => <ExperienceSection w={w} />)
        ) : (
          Array(3)
            .fill()
            .map(() => <ExperienceSection />)
        )}
      </div>
    </div>
  );
}

export default WorkOverview;
