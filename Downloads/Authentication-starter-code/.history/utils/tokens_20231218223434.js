const { sign } = require("jsonwebtoken");
// signing the access token
const createAccessToken = (id) => {
  return sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: 15 * 60,
  });
};

// signing the refresh token
const createRefreshToken = (id) => {
  return sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "90d",
  });
};

// sending the access token to the client
const sendAccessToken = ( _req, res, accesstoken) => {
    res.json({
      accesstoken,
      message: "Sign in Successful 🥳",
      type: "success",
    });
  };