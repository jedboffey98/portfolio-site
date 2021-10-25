import React from "react";

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

function AboutMe() {
  return (
    <div class="py-32 text-left h-screen">
      <div>
        <div class="border border-black h-64 w-64 rounded-full" />
        <h2 class="relative top-0 font-extrabold md:text-4xl text-2xl text-gray-600 mb-6">
          <span class="font-extrabold text-blue-600">Jed Boffey{"  "}</span>—
          engineer based in New York, NY
        </h2>
      </div>

      <p class="text-md text-gray-500 font-medium mb-2">
        How'd I make this site?
      </p>
      <div class="flex flex-wrap">
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
    </div>
  );
}

export default AboutMe;
