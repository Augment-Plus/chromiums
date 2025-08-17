const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: process.env.NODE_ENV !== "production",
  });

  const page = await browser.newPage();
  await page.goto("https://example.com");
  const title = await page.title();

  await browser.close();
  res.send(`Page title: ${title}`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
