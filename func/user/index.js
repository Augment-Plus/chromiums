const getBrowser = require("../../browser");
const data = require("../../data");


const create = async (user) => {
    const browser = await getBrowser();
    const context = await browser.newContext();
    data.profiles.push({
        context,
        email: user.email
    })

};

module.exports = {
  create,
};
