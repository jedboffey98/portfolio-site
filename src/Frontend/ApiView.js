import React, { useState } from "react";
import { sendRequest } from "../Services/ApiServices";

function ApiView() {
  const [entry, setEntry] = useState("/");
  const [response, setResponse] = useState();
  const [fetching, setFetching] = useState(false);

  const handleEntry = (event) => {
    setEntry(event.target.value);
  };

  const handleSend = () => {
    setFetching(true);
    sendRequest("GET", entry)
      .then((result) => {
        console.log(result);
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

  return (
    <div class="w-full px-4 max-w-3xl mx-auto">
      <p class="text-sm text-gray-700 mt-14">
        I've setup a basic API to pull data from this site's Firestore. Try it
        out below.
      </p>

      <p class="text-sm text-gray-700 mt-2 mb-3">
        You can <span class="font-semibold">GET</span>{" "}
        <span class="font-semibold underline">/experience</span> for a list of
        my work experience or{" "}
        <span class="font-semibold underline">/resume</span> for a
        base64-encoded resume (dealing with Functions' filesystem can be
        messy!).
      </p>
      <div class="flex gap-x-3">
        <input
          class="bg-gray-200 filter shadow-inner px-4 py-2 rounded-md text-sm w-full outline-red-100"
          value={entry}
          onChange={handleEntry}
        ></input>

        <button
          class="text-xs font-medium text-white bg-red-400 w-1/3 rounded-md filter shadow-inner hover:bg-red-500"
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

      <div class="w-full p-4 bg-gray-200 my-3 rounded-md overflow-y-auto max-h-72">
        <p class="text-xs">
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </p>
      </div>
    </div>
  );
}

export default ApiView;
