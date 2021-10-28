import React, { useState, useEffect } from "react";

import Headshot from "./assets/headshot_cropped.jpg";
import LinkedInLogo from "./assets/linkedin_logo.png";
import GithubLogo from "./assets/github-logo.png";
import { fetchSkills } from "../Services/SkillsServices";
import { getRandomInt } from "./Utils/MathsUtils";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

import Emoji from "./Emoji";
import { Transition } from "@tailwindui/react";

function BoffeyOverview() {
  const [skills, setSkills] = useState();
  const [hoveredSkill, setHoveredSkill] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetchSkills()
        .then((skills) => setSkills(skills))
        .catch((error) => {
          console.log(error);
          setSkills("error");
        });
    }, 250); //make skeletons visible for longer - engaging
  }, []); //like componentDidMount

  const handleHover = (skillId) => {
    setHoveredSkill(skillId);
  };

  return (
    <div class="w-full px-4 mb-16 pt-36">
      <h1 class="max-w-3xl text-3xl md:text-6xl mb-3 font-medium text-gray-700 mx-auto">
        Full-stack engineer based in New York, NY
      </h1>

      <div class="flex items-top space-x-4 justify-start max-w-3xl mx-auto my-10">
        <img
          aria-label="Image of myself"
          src={Headshot}
          class="h-24 w-24 object-cover rounded-full filter shadow-inner"
        />
        <div>
          <p class="text-sm text-gray-700 max-w-lg mb-2">
            Startup founder & NYU Stern student. Previously setup and ran{" "}
            <span class="font-semibold">CSGOShack</span>, and am now building{" "}
            <span class="font-semibold">Homease</span> and{" "}
            <span class="font-semibold">Loop</span>. Due to graduate in May 2022
            with a BS in Business (specialising in data science & finance), with
            a minor in CS.
          </p>

          <div class="flex gap-x-5 ml-1 items-center">
            <a
              href="https://www.linkedin.com/in/jed-boffey-7169aa165/"
              target="_blank"
            >
              <img
                src={LinkedInLogo}
                class="h-5 filter brightness-0 opacity-80"
              />
            </a>
            <a href="https://github.com/jedboffey98" target="_blank">
              <img src={GithubLogo} class="h-6 opacity-80" />
            </a>
          </div>
        </div>
      </div>

      <div class="justify-start max-w-3xl mx-auto">
        <div class="flex gap-x-9 mb-1">
          <p class="text-sm text-gray-600 mb-2 font-semibold">My skills</p>
          <p class="text-sm font-semibold text-red-400">This website</p>
        </div>

        <div class="flex flex-wrap gap-x-3 gap-y-2">
          {skills === "error" ? (
            <div class="flex">
              <ExclamationCircleIcon class="h-4 text-red-400" />
            </div>
          ) : skills === undefined ? (
            Array(12)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  class={`animate-pulse w-${getRandomInt(
                    13,
                    15
                  )} px-4 py-2 bg-gray-300 rounded-lg`}
                >
                  <p class="text-sm text-gray-300 opacity-0">placeholder</p>
                </div>
              ))
          ) : (
            skills.map((tech) => (
              <div class="relative">
                <div
                  key={tech.id}
                  class={`col-start-1 col-span-1 row-start-1 row-span-1 px-5 py-2 ${
                    tech.used_here ? "bg-red-400" : "bg-gray-500"
                  } rounded-full transition-all duration-150 z-10 ${
                    hoveredSkill && hoveredSkill !== tech.id && "opacity-60"
                  } ${
                    hoveredSkill && hoveredSkill !== tech.id && "filter blur-sm"
                  }`}
                  onMouseEnter={() => handleHover(tech.id)}
                  onClick={() =>
                    handleHover(hoveredSkill === tech.id ? undefined : tech.id)
                  }
                >
                  <p class="text-sm text-white">{tech.skill}</p>
                </div>

                <Transition
                  show={hoveredSkill === tech.id}
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  enter="transition-all duration-250 ease-in"
                  leave="transition-all duration-250 ease-in"
                  class="absolute top-0 z-30"
                  onMouseLeave={() => handleHover()}
                  onClick={() =>
                    handleHover(hoveredSkill === tech.id ? undefined : tech.id)
                  }
                >
                  <div
                    class={`${
                      hoveredSkill !== tech.id && "pointer-events-none"
                    }`}
                  >
                    <div
                      class={`absolute top-0 left-0 whitespace-nowrap text-white min-w-full max-w-64 px-5 py-2 rounded-full z-30 ${
                        tech.used_here ? "bg-red-400" : "bg-gray-500"
                      } ${
                        hoveredSkill === tech.id && "filter shadow-lg"
                      } flex gap-x-1 text-sm font-regular`}
                    >
                      <p class="pr-2">{tech.skill}</p>
                      {Array(tech.level)
                        .fill()
                        .map(() => (
                          <Emoji label="star" symbol="⭐" />
                        ))}
                      <div class="bg-white h-max w-1/2" />
                    </div>
                  </div>
                </Transition>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BoffeyOverview;
