import { storage } from "./Firebase";
import { getDownloadURL, ref } from "@firebase/storage";

//callback = (success) => ...
export const fetchResume = (callback) => {
  const pathRef = ref(storage, "RESUME.pdf");
  getDownloadURL(pathRef)
    .then((url) => {
      let a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.download = "RESUME.pdf";
      a.click();

      return callback(true);
    })
    .catch((error) => {
      console.log(error);
      return callback(false);
    });
};
