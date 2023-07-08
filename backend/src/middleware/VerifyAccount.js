const argon2 = require("argon2");
const { getUserByMail } = require("../models/users.models");
const { hashOptions } = require("./Auth");

const VerifyAccount = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { email, password } = req.body;
  try {
    const [response] = await getUserByMail(email, password);
    if (response) {
      const verifyPassword = argon2.verify(
        response.password,
        password,
        hashOptions
      );
      if (verifyPassword) {
        req.body.id = response.id;
        req.body.admin = response.is_admin;
        next();
      }
    } else {
      res.status(404).send({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { VerifyAccount };
