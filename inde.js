const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.json({ ip });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Start success on heroku`);
});
