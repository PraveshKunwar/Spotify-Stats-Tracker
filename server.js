//variables

require("dotenv").config();
const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const redirect_uri = process.env.REDIRECT || `http://localhost:${PORT}`;
const CLIENT_ID = process.env.CLIENT_ID;
const path = require("path");
const CLIENT_SECRET = process.env.CLIENT_SECRET;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get("/callback", (req, res) => {
  let code = req.query.code;
  let options = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64"),
    },
    json: true,
  };
  request.post(options, (err, response, body) => {
    let uri =
      "https://spotifystatstracker.herokuapp.com" || "http://localhost:3000";
    res.redirect(`${uri}`);
  });
});

app.listen(PORT, console.log(`Listening to PORT: ${PORT}`));
