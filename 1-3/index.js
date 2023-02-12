const express = require("express");
const userData = require("./user-data.json");
const app = express();

const getAllUsers = (req, res) => {
  res.send(userData);
};

const getAdmins = (req, res) => {
  res.send(userData.filter((user) => user.role === "admin"));
};

const notFoundController = (req, res) => {
  res.status(404).send("Sorry, that route is not found.");
};

app.get("/get-all-users", getAllUsers);
app.get("/admins", getAdmins);

app.use(notFoundController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
