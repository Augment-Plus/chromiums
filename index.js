const express = require('express');
const puppeteer = require('puppeteer');

const app = express();

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  const html = await page.content();
  await browser.close();

  res.send(html);
});

app.listen(process.env.PORT || 8080, ()=>{
  console.log('Server Started')
});
