const express = require("express");
const VIEWS_PATH = `${__dirname}/views`;

const app = express();
//we use the static middleware for Css and other files
app.use(express.static(VIEWS_PATH));

const pages = [
  { path: "/page1", file: "index1.html" },
  { path: "/page2", file: "index2.html" },
  { path: "/page3", file: "index3.html" },
  { path: "/page4", file: "index4.html" },
  { path: "/page5", file: "index5.html" },
];

pages.forEach(({ path, file }) => {
  app.get(path, (_req, res) => {
    res.sendFile(`${VIEWS_PATH}/${file}`);
  });
});

const notFoundController = (req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is listening on port ${port}...`);
});
