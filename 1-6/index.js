const express = require("express");

const app = express();
//we use the static middleware for Css and other files
app.use(express.static(__dirname + "/views"));

const pageController = (req, res) => {
  const noPage = req.params.no;
  res.sendFile(`${__dirname}/views/index${noPage}.html`);
};

const notFoundController = (_req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.get("/page:no", pageController);

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}...`);
});
