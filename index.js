const express = require("express");
const puppeteer = require("puppeteer-core");

const app = express();

app.get("/", async (req, res) => {
    const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser",
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    
    await browser.close();
    res.send(`Page title is: ${title}`);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
