const getBrowser = require("../browser");
const data = require("../data");
const fn = require("../func");

const init = async () => {
  await getBrowser();
  
  console.log("Launching App");
  fn.app.launch();
};

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("Closing browser...");
  await browser.close();
  process.exit();
});

process.on("SIGTERM", async () => {
  console.log("Closing browser...");
  await browser.close();
  process.exit();
});

module.exports = { init };
