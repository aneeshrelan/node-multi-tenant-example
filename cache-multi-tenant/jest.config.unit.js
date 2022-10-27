var config = require("./jest.config");
config.roots = ["./tests/"];
config.displayName = "UNIT TEST";
config.setupFilesAfterEnv = ["<rootDir>/jest.setup.js"];
config.reporters = ["default", "jest-junit"];
module.exports = config;
