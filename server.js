const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Boilerplate NRMP at http://localhost:${port}`);
});

app.listen(port, () => {
  console.log(`Boilerplate NRMP at http://localhost:${port}`);
});
