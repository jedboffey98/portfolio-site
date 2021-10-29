import React, { useState } from "react";
import { sendRequest } from "../Services/ApiServices";
import Typing from "react-typing-animation";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Transition } from "@tailwindui/react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";

const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

function ApiView() {
  const [method, setMethod] = useState("GET");
  const [entry, setEntry] = useState("/");

  const [showMethods, setShowMethods] = useState(false);

  const [body, setBody] = useState("{\n}");

  const [response, setResponse] = useState("Try out an endpoint!");
  const [fetching, setFetching] = useState(false);

  const handleEntry = (event) => {
    setEntry(event.target.value);
  };

  const handleSend = () => {
    setFetching(true);
    setResponse();
    sendRequest(method, entry, body)
      .then((result) => {
        setTimeout(() => {
          setResponse(result.data);
          setFetching(false);
        }, 500); //for dramatic effect
      })
      .catch((error) => {
        setTimeout(() => {
          setResponse(error);
          setFetching(false);
        }, 500);
      });
  };

  const handleBodyChange = (value) => {
    setBody(value);
  };

  return (
    <div class="w-full px-4 md:px-0 max-w-3xl mx-auto">
      <p class="text-sm text-gray-700 mt-14">
        I've setup a basic API to interact with this site's Firestore. Try it
        out below.
      </p>

      <p class="text-sm text-gray-700 mt-2 mb-3">
        You can <span class="font-semibold">GET</span>{" "}
        <span class="font-semibold underline">/experience</span>,{" "}
        <span class="font-semibold underline">/skills</span> or{" "}
        <span class="font-semibold underline">/resume</span> for a
        base64-encoded resume. Or, you can <span>POST</span>{" "}
        <span>/skills/{`{skill-id}`}/endorse</span> with a JSON body containing
        your name and a description to endorse any of my skills! (More to
        come...)
      </p>

      <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-3 mt-9 md:mt-7">
        <input
          class="bg-gray-200 filter shadow-inner px-4 py-2 rounded-md text-sm w-full outline-red-100 col-span-2 md:col-span-4 md:col-start-2 row-start-2 md:row-start-1"
          value={entry}
          onChange={handleEntry}
        ></input>

        <button
          onClick={() => setShowMethods((prev) => !prev)}
          class="row-start-1 col-start-1 md:row-start-1 md:col-start-1 "
        >
          <button class="h-full text-xs font-medium text-gray-700 px-4 py-2 bg-gray-200 w-full rounded-md filter shadow-inner hover:bg-gray-300  flex items-center space-x-2">
            <div class="flex-1" />
            <p>{method}</p>
            <ChevronDownIcon class="h-4" />
            <div class="flex-1" />
          </button>

          <Transition
            show={showMethods}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            enter="transition-opacity"
            leave="transition-opacity"
            leaveTo="opacity-0"
          >
            <div class="absolute text-left py-2 shadow-md bg-gray-100 rounded-md w-32 flex flex-col items-start z-50">
              {methods.map((m, i) => (
                <button
                  onClick={() => setMethod(m)}
                  class={`w-full text-xs px-4 ${
                    method === m
                      ? "text-red-400 font-semibold"
                      : "text-gray-700 font-medium"
                  } mt-2 pb-2 ${
                    i !== methods.length - 1 && "border-b-2"
                  } border-gray-200 text-left`}
                >
                  <p>{m}</p>
                </button>
              ))}
            </div>
          </Transition>
        </button>

        <button
          class="text-xs font-medium  text-white px-4 py-2 bg-red-400 w-full rounded-md filter shadow-inner hover:bg-red-500 row-start-1 col-start-2 md:row-start-1 md:col-start-6"
          onClick={handleSend}
        >
          {!fetching ? (
            "SEND"
          ) : (
            <svg class="animate-spin h-5 w-5 mx-auto ..." viewBox="0 0 24 24">
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
            </svg>
          )}
        </button>
      </div>

      {method !== "GET" && (
        <AceEditor
          style={{
            backgroundColor: "rgba(229, 231, 235, var(--tw-bg-opacity))",
            width: "100%",
            padding: "1rem",
            margin: "0.75rem 0",
            borderRadius: "0.375rem",
            color: "rgba(55, 65, 81, 1)",
          }}
          mode="json"
          showGutter={false}
          height="100px"
          value={body}
          onChange={handleBodyChange}
        />
      )}

      <div class="w-full p-4 bg-gray-200 my-3 overflow-auto rounded-md h-72 filter shadow-inner">
        {response ? (
          JSON.stringify(response, null, 2).length < 100 ? (
            <Typing speed={1}>
              <p class="text-xs">
                <pre>{JSON.stringify(response, null, 2)}</pre>
              </p>
            </Typing>
          ) : (
            <p class="text-xs">
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </p>
          )
        ) : (
          <p class="text-xs">#</p>
        )}
      </div>
    </div>
  );
}

export default ApiView;
