const childProcess = require("child_process");

module.exports = () => {
  const version = childProcess
    .execSync("git rev-parse --short HEAD")
    .toString()
    .trim();

  return {
    version,
  };
};
