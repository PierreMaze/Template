const { getUserByMail } = require("../models/users.models");

const VerifyMail = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { email, password } = req.body;
  try {
    const [response] = await getUserByMail(email, password);
    if (response) {
      res.status(404).send({ message: "Mail already exists" });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { VerifyMail };
