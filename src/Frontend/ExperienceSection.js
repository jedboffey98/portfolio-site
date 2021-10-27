import React from "react";

import Fade from "react-reveal/Fade";

import { LocationMarkerIcon } from "@heroicons/react/solid";
import { getRandomInt } from "./Utils/MathsUtils";

function ExperienceSection(props) {
  const loadify = (work) => {
    if (work === undefined)
      return "bg-gray-200 animate-pulse text-opacity-0 w-auto";
  };

  return (
    <>
      <div class="self-end justify-self-center md:self-start md:justify-self-start mt-10 md:mt-0 ">
        <Fade left>
          <div>
            <p class={`text-4xl font-medium ${loadify(props.w)} text-red-400`}>
              {props.w ? props.w.dates : "##### - #####"}
            </p>
          </div>
        </Fade>

        <div class="flex items-center gap-x-1">
          <Fade bottom>
            <LocationMarkerIcon class="h-6 text-gray-300" />
            <p class={`font-regular text-sm text-gray-500 ${loadify(props.w)}`}>
              {props.w ? props.w.location : "########"}
            </p>
          </Fade>
        </div>
      </div>

      <div class="flex-1 w-full">
        <Fade top>
          <div class="flex items-baseline justify-between">
            <h3 class={`text-xl text-gray-600 font-medium ${loadify(props.w)}`}>
              {props.w ? props.w.company : "#########"}
            </h3>
          </div>
        </Fade>

        <ul class="list-disc text-gray-800 text-sm">
          <Fade top>
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
          </Fade>
        </ul>
      </div>
    </>
  );
}

export default ExperienceSection;
