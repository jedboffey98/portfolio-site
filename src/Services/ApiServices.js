import { httpsCallable } from "@firebase/functions";
import { functions } from "./Firebase";

export const sendRequest = async (method, extension, body) => {
  const testApi = httpsCallable(functions, "testApi");

  let data = null;
  if (body && method !== "GET") {
    try {
      data = JSON.parse(body);
    } catch {
      console.log(`Couldn't parse user input: ${JSON.stringify(body)}`);
      return Promise.resolve({
        data: "400 - Bad Request (cannot parse JSON, all keys and values must be surrounded by quotes)",
      });
    }
  }

  console.log(data);

  return testApi({ extension: extension, method: method, reqData: data });
};
