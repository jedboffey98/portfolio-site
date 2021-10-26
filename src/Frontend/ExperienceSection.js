import React from "react";

import { LocationMarkerIcon } from "@heroicons/react/solid";
import { getRandomInt } from "./Utils/MathsUtils";

function ExperienceSection(props) {
  const loadify = (work) => {
    if (work === undefined)
      return "bg-gray-200 animate-pulse text-opacity-0 w-auto";
  };

  return (
    <>
      <div>
        <p
          class={`self-start justify-self-center text-4xl font-medium ${loadify(
            props.w
          )} text-red-400`}
        >
          {props.w ? props.w.dates : "##### - #####"}
        </p>
        <div class="flex items-center gap-x-1">
          <LocationMarkerIcon class="h-8 text-gray-300" />
          <p class={`font-regular text-md text-gray-500 ${loadify(props.w)}`}>
            {props.w ? props.w.location : "########"}
          </p>
        </div>
      </div>

      <div class="flex-1 w-full">
        <div class="flex items-baseline justify-between">
          <h3 class={`text-xl text-gray-700 font-regular ${loadify(props.w)}`}>
            {props.w ? props.w.company : "#########"}
          </h3>
        </div>

        <ul class="list-disc">
          {props.w
            ? props.w.accomplishments.map((a) => (
                <li class="my-3 text-sm text-gray-800">{a}</li>
              ))
            : Array(4)
                .fill()
                .map(() => (
                  <li
                    class={`my-3 w-${getRandomInt(
                      8,
                      12
                    )} text-sm text-gray-800 ${loadify()}`}
                  >
                    ####
                  </li>
                ))}
        </ul>
      </div>
    </>
  );
}

export default ExperienceSection;
