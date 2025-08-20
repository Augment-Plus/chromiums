const fn = require("../func");

module.exports = {
  home: async (req, res) => {
    res.send(fn.sendProfiles());
  },

  createUser: async (req, res) => {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const data = await fn.user.create(user);

    res.send(data);
  },
};
