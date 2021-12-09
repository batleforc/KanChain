const Board = artifacts.require("Board");
const Task = artifacts.require("Task");

module.exports = function (deployer) {
  deployer.deploy(Board);
};
