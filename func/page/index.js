const goto = async (page, url) => {
  try {
    await page.goto(url, { waitUntil: "domcontentloaded" });
  } catch (err) {
    console.error(err);
  }
};

const title = async (page) => await page.title();

module.exports = { goto, title };
