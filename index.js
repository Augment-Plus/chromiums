const express = require("express");
const { chromium } = require("playwright");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", async (req, res) => {
  const accounts = ["user1", "user2", "user3"]; // your accounts
  const results = [];

  // Launch a single Chromium instance
  const browser = await chromium.launch({ headless: true });

  try {
    for (const account of accounts) {
      // Create an isolated context per account
      const context = await browser.newContext();
      const page = await context.newPage();

      // Example: navigate to login or user-specific page
      await page.goto(`https://example.com/login?user=${account}`);

      // Example: perform actions here
      // await page.fill('#username', account);
      // await page.fill('#password', 'password');
      // await page.click('#login');

      results.push(`Processed ${account}`);

      await context.close(); // close context but keep browser running
    }

    res.send({ status: "success", results });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: "error", message: err.message });
  } finally {
    await browser.close(); // close browser after all contexts
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
