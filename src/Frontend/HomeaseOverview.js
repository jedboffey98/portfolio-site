import React, { createRef } from "react";
import useOnScreen from "../Hooks/useOnScreen";

import Homease1 from "./assets/homease_1.jpg";
import Homease2 from "./assets/homease_2.jpg";
import Homease3 from "./assets/homease_3.jpg";

const stack = [
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Redux",
  },
  {
    name: "Swift",
  },
  {
    name: "SwiftUI",
  },
  {
    name: "UIKit",
  },
  {
    name: "Firebase Auth",
  },
  {
    name: "Firestore",
  },

  {
    name: "Google Cloud Storage",
  },
  {
    name: "Google Cloud Functions",
  },
  {
    name: "Google Pub/sub",
  },
  {
    name: "Stripe",
  },
  {
    name: "Algolia",
  },
  {
    name: "HelloSign",
  },
];

function HomeaseOverview() {
  const ref = createRef();
  const visible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      class={`w-9/10 max-w-7xl h-screen bg-red-300 mx-auto mb-12 mt-16 transform-gpu ${
        visible && "scale-105"
      } transition-all duration-700 ease-in-out grid grid-cols-2 grid-rows-5 lg:grid-cols-6 lg:grid-rows-6`}
    >
      <img
        src={Homease1}
        class="h-full col-start-1 col-span-1 row-start-2 lg:col-start-1 lg:col-span-2 lg:row-span-3 lg:row-start-4 lg:self-end lg:justify-self-start object-cover pl-6 z-10"
      />

      <img
        src={Homease2}
        class="h-full col-start-2 col-span-2 row-span-2 py-6 lg:py-0 lg:row-span-4 lg:row-start-2 lg:col-start-3 lg:col-span-2 self-center justify-self-center object-cover z-10 transform-gpu hover:scale-110 transition-all duration-700 ease-in-out"
      />

      <img
        src={Homease3}
        class="h-full col-start-1 col-span-1 row-start-1 lg:col-start-1 lg:col-span-2 lg:row-span-3 lg:row-start-1 self-end justify-self-end object-cover pl-16 z-10"
      />

      <div
        style={{
          backgroundColor: "#fca5a5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ac5555' fill-opacity='0.15'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        class="h-1/2 lg:h-3/4 w-1/4 lg:w-full col-span-1 col-start-1 row-span-1 row-start-2 lg:row-span-2 lg:col-span-1 lg:row-start-3 lg:col-start-1 lg:justify-center justify-self-end self-center z-0 rounded-full"
      />

      <div
        style={{
          backgroundColor: "#fca5a5",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ac5555' fill-opacity='0.15'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        class="h-0 w-0 lg:h-full lg:w-full row-span-3 col-span-2 row-start-2 col-start-5 z-0 rounded-full"
      />

      <div class="w-9/10 p-6 ml-auto mt-auto col-start-1 row-start-3 col-span-2 row-span-2 lg:col-start-5 lg:col-span-2 lg:row-start-1 lg:row-span-4 lg:m-3 self-end justify-self-center z-10 rounded-none lg:rounded-md border-t-2 border-white lg:border-0">
        <h2 class="text-white text-3xl font-medium mb-6">
          Homease{" "}
          <span class="text-xs font-regular text-white">
            October 2020 - present
          </span>
        </h2>
        <p class="text-white text-sm font-regular mb-2 font-medium">
          These aren't mockups, we've implemented about 85% of the
          functionality.
        </p>
        <p class="text-gray-100 text-sm font-regular">
          Homease is an end to end real estate platform for tenants and brokers.
          We centralize the whole process, from finding your place, to putting
          your deposit down, and finally to paying rent.
        </p>

        <h5 class="text-sm font-semibold text-white mt-7 mb-4">The stack</h5>
        <div class="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <div key={tech.name} class="py-2 px-4 bg-gray-100 rounded-full">
              <p class="text-xs text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeaseOverview;
