import brcypt from "bcryptjs";
import User from "../models/user.models.js";
export const signup = (req, res) => {
  const { email, fullName, password } = req.body;
  try {
    if (password.length < 6) {
      res.status(400).send("Password must be at least 6 characters long");
    }
    const user = new User.findOne({ email });
    if (user) {
      res.status(400).send("Email already exists");
    }
    const salt = brcypt.genSaltSync(10);
    const hashedPassword = brcypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      //gen jwt token:
    } else {
      res.send("Error creating user, check credentials");
    }
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login");
};

export const logout = (req, res) => {
  res.send("logout");
};
