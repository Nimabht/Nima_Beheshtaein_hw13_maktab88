const express = require("express");

const app = express();

const pageOneController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index1.html`);
};
const pageTwoController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index2.html`);
};
const pageThreeController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index3.html`);
};
const pageFourController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index4.html`);
};
const pageFiveController = (_req, res) => {
  res.sendFile(`${__dirname}/views/index5.html`);
};

const notFoundController = (req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.get("/page1", pageOneController);
app.get("/page2", pageTwoController);
app.get("/page3", pageThreeController);
app.get("/page4", pageFourController);
app.get("/page5", pageFiveController);

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}...`);
});
