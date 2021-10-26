import { db } from "./Firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const fetchExperiences = async () => {
  const q = query(collection(db, "experiences"), orderBy("start_date", "desc"));
  const querySnapshot = await getDocs(q);

  const experienceData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })); //map docs with their id to allow for easier keying and identification

  return experienceData;
};
