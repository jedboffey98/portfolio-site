import { Transition } from "@tailwindui/react";
import React, { useState, useEffect } from "react";

import Headshot from "./assets/headshot_cropped.jpg";
import LinkedInLogo from "./assets/linkedin_logo.png";
import GithubLogo from "./assets/github-logo.png";
import { fetchSkills } from "../Services/SkillsServices";
import { getRandomInt } from "./Utils/MathsUtils";
import { ExclamationCircleIcon } from "@heroicons/react/outline";

function BoffeyOverview() {
  const [skills, setSkills] = useState();

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

  return (
    <div class="w-full px-4 mb-16">
      <h1 class="max-w-3xl text-3xl md:text-6xl mb-3 mt-36 font-medium text-gray-700 mx-auto">
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
                  )} px-4 py-2 bg-gray-300 rounded-full`}
                >
                  <p class="text-sm text-gray-300 opacity-0">placeholder</p>
                </div>
              ))
          ) : (
            skills.map((tech) => (
              <div
                key={tech.id}
                class={`px-4 py-2 ${
                  tech.used_here ? "bg-red-400" : "bg-gray-500"
                } rounded-full`}
              >
                <p class="text-sm text-white">{tech.skill}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BoffeyOverview;
