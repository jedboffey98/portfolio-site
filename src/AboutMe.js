import React from "react";
import GithubLogo from "./assets/github-logo.png";
import LinkedInLogo from "./assets/linkedin_logo.svg";
import Headshot from "./assets/headshot_cropped.jpg";

import { CheckCircleIcon } from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";

import * as outlineIcons from "@heroicons/react/outline";

const portfolioStack = [
  {
    name: "JavaScript",
    img: "js_logo.png",
  },
  {
    name: "Tailwind CSS",
    img: "tailwindcss_logo.svg",
  },
  {
    name: "React",
    img: "react_logo.png",
  },
  {
    name: "Firebase",
    img: "firebase_logo.png",
  },
];

const currentUserTasks = [
  {
    description: "Searching for places and messaging brokers",
    complete: true,
    Icon: outlineIcons["SearchIcon"],
  },
  {
    description: "Scheduling and handling viewing appointments",
    complete: true,
    Icon: outlineIcons["CalendarIcon"],
  },
  {
    description: "Making offers, responding, and counteroffering",
    complete: true,
    Icon: outlineIcons["DatabaseIcon"],
  },
  {
    description: "Paying deposits with Apple Pay/card and ACH credits",
    complete: true,
    Icon: outlineIcons["CreditCardIcon"],
  },
  {
    description: "Esigning your lease so it's squared away easily",
    complete: true,
    Icon: outlineIcons["PencilIcon"],
  },
  {
    description: "Paying rent and submitting maintenance requests",
    complete: false,
    Icon: outlineIcons["HomeIcon"],
  },
];

const currentBrokerTasks = [
  {
    description: "Identity verification and bank linking",
    complete: true,
    Icon: outlineIcons["IdentificationIcon"],
  },
  {
    description: "Responding to offers and viewing requests",
    complete: true,
    Icon: outlineIcons["ClipboardListIcon"],
  },
  {
    description: "Creating new listings",
    complete: true,
    Icon: outlineIcons["PlusIcon"],
  },
  {
    description: "Assigning team members to handle your listings",
    complete: true,
    Icon: outlineIcons["UserGroupIcon"],
  },
  {
    description: "Create and manage document templates",
    complete: true,
    Icon: outlineIcons["DocumentDuplicateIcon"],
  },
  {
    description:
      "Setup complex subscription schedules to handle all lease structures",
    complete: false,
    Icon: outlineIcons["CashIcon"],
  },
];

function AboutMe() {
  return (
    <div class="py-32 text-left h-full flex flex-col">
      <div class="grid grid-cols-4 grid-rows-3 items-center">
        <img
          src={Headshot}
          class="h-64 w-64 rounded-full col-span-2 col-start-1 row-span-3 row-start-1 object-cover shadow-inner"
        />
        <div class="lg:col-start-1 lg:col-span-2 md:col-start-2 md:col-span-1 row-start-2 justify-self-center col-start-3 col-span-2">
          <button class="bg-blue-500 hover:bg-blue-700 rounded-md text-white font-medium px-4 py-3 filter drop-shadow-md">
            Contact me
          </button>
        </div>
      </div>
      <h2 class="relative top-0 font-extrabold md:text-4xl text-2xl text-gray-600 my-6">
        <span class="font-extrabold text-blue-600">Jed Boffey{"  "}</span>—
        engineer based in New York, NY
      </h2>

      <div class="flex flex-col space-y-3 mb-6">
        <h4 class="text-md text-gray-500 font-medium">My socials...</h4>
        <a href="http://github.com/jedboffey98" class="flex space-x-2">
          <img src={GithubLogo} class="h-6 w-6" />
          <p class="text-gray-800">Github</p>
        </a>

        <a href="http://github.com/jedboffey98" class="flex space-x-2">
          <img src={LinkedInLogo} class="h-6 w-6" />
          <p class="text-gray-800">LinkedIn</p>
        </a>
      </div>

      <h4 class="text-md text-gray-500 font-medium mb-2">
        How'd I make this site?
      </h4>
      <div class="flex flex-wrap mb-5">
        {portfolioStack.map((tech) => (
          <div class="h-11 mr-4">
            <div
              id={tech.name}
              class="flex space-x-2 items-center bg-gray-200 filter drop-shadow-sm rounded-lg p-2"
            >
              <img
                src={`${process.env.PUBLIC_URL}/public_assets/${tech.img}`}
                class="h-5 object-fit"
              />
              <p class="text-gray-800 text-sm">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>

      <h4 class="text-md text-gray-500 font-medium mb-2">
        What am I doing at the moment?
      </h4>
      <p class="text-gray-800">
        I'm working on a rental platform called Homease, featuring...
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="bg-gray-200 p-4 rounded-md filter shadow-md mx-auto w-full my-5">
          <p class="mb-2 uppercase text-gray-500 text-sm font-medium">
            For users
          </p>

          <div class="flex flex-col space-y-5">
            {currentUserTasks.map((task) => (
              <div id={task.description} class="flex space-x-2 text-gray-700">
                {task.Icon && (
                  <task.Icon
                    class={`h-6 ${
                      task.complete ? "text-green-500" : "text-red-500"
                    }`}
                  />
                )}
                <p class="text-sm">{task.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div class="bg-gray-200 p-4 rounded-md filter shadow-md mx-5 w-full my-5">
          <p class="mb-2 uppercase text-gray-500 text-sm font-medium">
            For brokers
          </p>

          <div class="flex flex-col space-y-5">
            {currentBrokerTasks.map((task) => (
              <div id={task.description} class="flex space-x-2 text-gray-700">
                {task.Icon && (
                  <task.Icon
                    class={`h-6 ${
                      task.complete ? "text-green-500" : "text-red-500"
                    }`}
                  />
                )}
                <p class="text-sm">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
