const express = require("express");
const app = express();

const rootController = (req, res) => {
  res.send("Root Route");
};

const homeController = (req, res) => {
  res.send("Home Route");
};

const aboutController = (req, res) => {
  res.send("About Route");
};

const contactController = (req, res) => {
  res.send("Contact Route");
};

const notFoundController = (req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.get("/", rootController);
app.get("/home", homeController);
app.get("/about", aboutController);
app.get("/contact", contactController);

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
