/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { dbFileName } = require("./constants.ts");

const getDatabaseData = () => {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, dbFileName)));
};

const getUserWithoutPassword = (user) => {
  const userCopy = JSON.parse(JSON.stringify(user));
  delete userCopy.password;

  return userCopy;
};

module.exports = {
  getDatabaseData,
  getUserWithoutPassword,
};
