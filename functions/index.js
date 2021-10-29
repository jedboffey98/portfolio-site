const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
const storage = admin.storage().bucket();

const express = require("express");
const app = express();
const main = express();

const axios = require("axios");

main.use("/api/v1", app);

exports.webapi = functions.https.onRequest(main);

exports.testApi = functions.https.onCall(async (data, context) => {
  const extension = data.extension;
  const method = data.method.toLowerCase();
  const reqData = data.reqData;

  //will need to shard this eventually to support higher throughput (> 1/s)
  await db
    .collection("stats")
    .doc("api_calls")
    .update({
      count: admin.firestore.FieldValue.increment(1),
    });

  // Send get request here because cross-origin policies prevent directly in-app
  return axios({
    method: method,
    url: `http://localhost:5001/boffey-portfolio/us-central1/webapi/api/v1${extension}`,
    //url: `https://us-central1-boffey-portfolio.cloudfunctions.net/webapi/api/v1${extension}`,
    responseType: "json",
    data: reqData,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(`Failed with ${error.response.status} on ${extension}`);
      if (error.response) {
        return `${error.response.status} - ${error.response.statusText}${
          error.response.data.errorMessage
            ? ` (${error.response.data.errorMessage})`
            : ""
        }`; //include any custom error in brackets at end of message for client return
      } else {
        return "500 - Unknown error occured"; // unknown error type
      }
    });
});

app.get("/experience", async (req, res) => {
  const querySnapshot = await db.collection("experiences").get();
  const experiences = querySnapshot.docs.map((exp) => ({
    id: exp.id,
    ...exp.data(),
  }));

  res.json(experiences).status(200).send();
});

app.get("/resume", async (req, res) => {
  const resumeRef = storage.file("RESUME.pdf");

  return resumeRef.download().then((data) => {
    // return to keep instance active since async
    const file = data[0];

    const b64 =
      "data:application/pdf;base64," + Buffer.from(file).toString("base64");

    res
      .json({
        base64_resume: b64,
      })
      .status(200)
      .send();
  });
});

app.get("/skills", async (req, res) => {
  const querySnapshot = await db.collection("skills").get();
  const skills = querySnapshot.docs.map((skill) => ({
    id: skill.id,
    ...skill.data(),
  }));

  res.json(skills).status(200).send();
});

app.route("/skills/:skillId/endorse").post(async (req, res) => {
  console.log(req.body);
  if (req.body.name && req.body.description) {
    //check no previous endorsements under this name exist
    const previousEndorsements = await db
      .collection("skills")
      .doc(req.params.skillId)
      .collection("endorsements")
      .where("name", "==", req.body.name)
      .get();

    if (previousEndorsements.docs.length !== 0) {
      return res.status(400).json({
        errorMessage: "You cannot endorse me twice for this skill!",
      });
    }

    //write the new endorsement!
    await db
      .collection("skills")
      .doc(req.params.skillId)
      .collection("endorsements")
      .doc()
      .set({
        name: req.body.name,
        description: req.body.description,
      });
  } else {
    return res.status(400).json({
      errorMessage: "application/json body must include name and description",
    });
  }

  return res.sendStatus(200);
});
