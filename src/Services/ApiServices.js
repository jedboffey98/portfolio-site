import { httpsCallable } from "@firebase/functions";
import { functions } from "./Firebase";

export const sendRequest = async (type, extension) => {
  const testApi = httpsCallable(functions, "testApi");
  return testApi({ extension: extension, method: "GET" });
};
