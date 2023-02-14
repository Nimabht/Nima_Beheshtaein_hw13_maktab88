const express = require("express");

const app = express();
//we use the static middleware for Css and other files
app.use(express.static(__dirname + "/views"));

const homeController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
};

const imageController = (_req, res) => {
  res.sendFile(`${__dirname}/views/img.jpg`);
};

const notFoundController = (req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.get("/home", homeController);
app.get("/picture", imageController);

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}...`);
});
