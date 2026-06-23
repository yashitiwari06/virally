const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const { userModel } = require("../models/user");
const jwt = require("jsonwebtoken");
const secrectKey = "yashi123$"

router
.route("/signup")
.post(postsignup);

router
.route("/login")
.post(postlogin);

router
.route("/verify")
.get(verifyCookie);

router
.route("/deleteCookie")
.get(deleteCookie);

async function postsignup(req, res) {
  const userdetails = req.body;

  const db_data = await userModel.findOne({ email: userdetails.email });
  if (db_data) {
    console.log("User Already Exsist");
    res.status(409).json({
      success: "false",
      message: "User Already Exsist",
    });
  } else {
    if (userdetails.confirmpassword == userdetails.password) {

      const salt = bcrypt.genSaltSync();
      const hashedpassword = bcrypt.hashSync(userdetails.password,salt);

      const detailsToBeSaved = {
        username : userdetails.username,
        email : userdetails.email,
        password : hashedpassword
      }

      const newUser = new userModel(detailsToBeSaved);
      await newUser.save();
      res.status(201).json({
        success: true,
      });
    } else {
      console.log("password doesn't match");
      res.status(400).json({
        success : "false",
        message: "passwords don't match",
      });
    }
  }
}

async function postlogin(req,res) {
  const userdetails = req.body;
  console.log(req.body);

  const db_userdetails = await userModel.findOne({username : userdetails.username});
  const isMatch = await bcrypt.compare(userdetails.password,db_userdetails.password);
  if(isMatch) {
    const token = createJwtToken(db_userdetails);
    res.cookie("token",token, {
      httpOnly: true,
      secure: false
    });
    console.log("password matched redirecting to home page");
    res.json({
      success : "true",
      message : "Your credentials are right",
    });
  } else {
    res.status(409).json({
      success : "false",
      message : "Your credentials are wrong",
    })
  }
}

async function verifyCookie(req, res) {
  const token = req.cookies.token;
  try {
    const response = await jwt.verify(token,secrectKey);
    res.json({
      username : response.username,
      verify : true,
      message : "valid user"
    });
  } catch(err) {
    res.json({
      verify: false,
      message : "you have to login again"
    });
  }
}

function deleteCookie(req,res) {
  res.clearCookie("token");

}

function createJwtToken(userdetails) {
  const token = jwt.sign(
    {"id" : userdetails._id,
      "username" : userdetails.username
    },
    secrectKey,
    {"expiresIn" : "1d"}
  )
  return token;
}

module.exports = router;

