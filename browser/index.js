// /browser.js
const { chromium } = require("playwright");

let browser;

async function getBrowser() {
  console.log("Launching Browser");

  if (!browser) {
    browser = await chromium.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-gpu",
        "--disable-dev-shm-usage",
      ],
    });

    console.log("Browser launched!");
  }
  return browser;
}

// Export the function, not the raw browser
module.exports = getBrowser;
