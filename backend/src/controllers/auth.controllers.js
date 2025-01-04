import brcypt from "bcryptjs";
import User from "../models/user.models.js";
import { generateToken } from "../lib/utils.js";
export const signup = async (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    if (!email || !fullName || !password) {
      res.status(400).send("Please provide all the required fields");
    }
    if (password.length < 6) {
      res.status(400).send("Password must be at least 6 characters long");
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send("Email already exists");
    }
    const salt = await brcypt.genSaltSync(10);
    const hashedPassword = await brcypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      //gen jwt token:
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilepic: newUser.profilepic,
      });
    } else {
      res.send("Error creating user, check credentials");
    }
  } catch (error) {
    console.log("Error in the controller, error: ", error);
    res.status(500).send("Error in the controller, error: " + error);
  }
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
