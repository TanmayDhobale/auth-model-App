const { verify } = require("jsonwebtoken");
const User = require("../models/user");
const protected = async (req, res, next) => {
  // get the token from the header
  const authorization = req.headers["authorization"];
  // if we don't have a token, return error
  if (!authorization)
    return res.status(500).json({
      message: "No token! 🤔",
      type: "error",
    });
  // if we have a token, you have to verify it
  const token = authorization.split(" ")[1];
  let id;
  try {
    id = verify(token, process.env.ACCESS_TOKEN_SECRET).id;
  } catch {
    return res.status(500).json({
      message: "Invalid token! 🤔",
      type: "error",
    });
  }
  // if the token is invalid, return error
  if (!id)
    return res.status(500).json({
      message: "Invalid token! 🤔",
      type: "error",
    });
  // if the token is valid, check if the user exists
  const user = await User.findById(id);
  // if the user doesn't exist, return error
  if (!user)
    return res.status(500).json({
      message: "User doesn't exist! 😢",
      type: "error",
    });
  // if the user exists, we'll add a new field "user" to the request
  req.user = user;
  // call the next middleware
  next();
};
module.exports = { protected };