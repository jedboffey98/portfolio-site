const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
// const storage = admin.storage();

const express = require("express");
const app = express();
const main = express();

const axios = require("axios");

main.use("/api/v1", app);

exports.webapi = functions.https.onRequest(main);

exports.testApi = functions.https.onCall(async (data, context) => {
  const extension = data.extension;
  const method = data.method;

  // GET request for remote image in node.js
  return axios({
    method: "get",
    url: `https://us-central1-boffey-portfolio.cloudfunctions.net/webapi/api/v1${extension}`,
    responseType: "json",
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return `${error.response.status} - ${error.response.statusText}`;
    });
});

app.get("/experience", async (req, res) => {
  const querySnapshot = await db.collection("experiences").get();
  const experiences = querySnapshot.docs.map((exp) => ({
    id: exp.id,
    ...exp.data(),
  }));

  res.json(experiences).status(200);
});

// app.post("/resume", async (req, res) => {
//   const resumeRef = storage.ref("RESUME.pdf");
//   const base64Pdf = resumeRef
// });
