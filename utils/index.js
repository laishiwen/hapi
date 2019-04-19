const jsonWebToken = require("jsonwebtoken");

const authToken = user_id =>
  jsonWebToken.sign(
    {
      user_id,
      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
    },
    process.env.JWT_SECRET,
    { algorithm: "HS256" }
  );

const cookie_options = {
  ttl: 7 * 24 * 60 * 60 * 1000, // expires a year from today
  encoding: "base64json", // we already used JWT to encode
  isSecure: true, // warm & fuzzy feelings
  isHttpOnly: true, // prevent client alteration
  clearInvalid: false, // remove invalid cookies
  strictHeader: true // don't allow violations of RFC 6265
};

module.exports = {
  cookie_options: cookie_options,
  authToken: authToken
};
