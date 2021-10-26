const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();
// const storage = admin.storage();

const express = require("express");
const app = express();
const main = express();

main.use("/api/v1", app);

exports.webapi = functions.https.onRequest(main);

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
