const express =require("express");
const Router = express.Router();
const {postUser , loginUser} = require("../controller/register")

Router
  .route('/register')
  .post(postUser)

  Router
  .route("/login")
  .post(loginUser)

  module.exports = Router;