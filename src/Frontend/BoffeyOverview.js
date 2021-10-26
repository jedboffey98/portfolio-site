import { Transition } from "@tailwindui/react";
import React, { useState, useEffect } from "react";

import Headshot from "./assets/headshot_cropped.jpg";
import LinkedInLogo from "./assets/linkedin_logo.png";
import GithubLogo from "./assets/github-logo.png";
import { fetchSkills } from "../Services/SkillsServices";

const myStack = [
  {
    name: "JavaScript",
    this: true,
  },
  {
    name: "Node.js",
  },
  {
    name: "React",
    this: true,
  },
  {
    name: "Firebase",
    this: true,
  },
  {
    name: "Google Cloud",
  },
  {
    name: "Swift",
  },
  {
    name: "SwiftUI",
  },
  {
    name: "Python",
  },
  {
    name: "Java",
  },
  {
    name: "C/C++",
  },
  {
    name: "REST",
  },
  {
    name: "Postman",
  },
  {
    name: "Git",
  },
];

function BoffeyOverview() {
  const [skills, setSkills] = useState();

  useEffect(() => {
    fetchSkills().then((skills) => setSkills(skills));
  }, []); //like componentDidMount

  return (
    <div class="w-full px-4 mb-16">
      <p>{JSON.stringify(skills)}</p>
      <h1 class="max-w-3xl text-3xl md:text-6xl mb-3 mt-36 font-medium text-gray-700 mx-auto">
        Full-stack engineer based in New York, NY
      </h1>

      <div class="flex items-top space-x-4 justify-start max-w-3xl mx-auto my-8">
        <img
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
        <div class="flex gap-x-9 mb-3">
          <p class="text-sm text-gray-600 mb-2 font-semibold">My skills</p>
          <p class="text-sm font-semibold text-red-400">This website</p>
        </div>

        <div class="flex flex-wrap gap-x-3 gap-y-2">
          {myStack.map((tech) => (
            <div
              key={tech.name}
              class={`px-3 py-2 ${
                tech.this ? "bg-red-400" : "bg-gray-500"
              } rounded-lg`}
            >
              <p class="text-sm text-white">{tech.name}</p>
            </div>
          ) : skills === undefined ? (
            Array(5)
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  class={`animate-pulse w-${getRandomInt(
                    13,
                    18
                  )} px-3 py-2 bg-gray-300 rounded-lg`}
                >
                  <p class="text-sm text-gray-300 opacity-0">placeholder</p>
                </div>
              ))
          ) : (
            skills.map((tech) => (
              <div
                key={tech.id}
                class={`px-3 py-2 ${
                  tech.used_here ? "bg-red-400" : "bg-gray-500"
                } rounded-lg`}
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
