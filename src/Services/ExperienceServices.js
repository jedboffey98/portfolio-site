import { db } from "./Firebase";
import { collection, getDocs } from "firebase/firestore";

// All callbacks in (data, error) format
//
//

export const fetchExperiences = async (callback) => {
  const querySnapshot = await getDocs(collection(db, "experiences"));
  const experienceData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })); //map docs with their id to allow for easier keying and identification

  return experienceData;
};
