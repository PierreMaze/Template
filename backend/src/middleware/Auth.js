const argon2 = require("argon2");

const hashOptions = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashLength: 50,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { password } = req.body;
  const hashedPassword = await argon2.hash(password, hashOptions);
  req.body.password = hashedPassword;
  next();
};

module.exports = { hashPassword, hashOptions };
