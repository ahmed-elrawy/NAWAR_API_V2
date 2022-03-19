


const User = require("../models/User");
const Phone = require("../models/phone");

const multer = require("multer") // to parse form data body
const path = require("path")
const fs = require("fs")

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


const router = require("express").Router();



module.exports = router;