const express = require("express");
const path = require("path");

const URL = require("./models/url.js");
const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRouter.js");
const { connectToMongoDb } = require("./connection.js");

const app = express();
const PORT = 8001;

connectToMongoDb("mongodb://127.0.0.1:27017/url-shortener-app")
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timeStamp: Date.now() } } },
    { new: true }
  );

  if (!entry) {
    return res.status(404).send("URL not found");
  }

  return res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
