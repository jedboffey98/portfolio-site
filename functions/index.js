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

  // Send get request here because cross-origin policies prevent directly in-app
  return axios({
    method: "get",
    url: `https://us-central1-boffey-portfolio.cloudfunctions.net/webapi/api/v1${extension}`,
    responseType: "json",
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      if (error.response) {
        return `${error.response.status} - ${error.response.statusText}`;
      } else {
        return "500 - Internal Server Error"; // unknown error type
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

    res.json({
      base64_resume: b64,
    });
  });
});
