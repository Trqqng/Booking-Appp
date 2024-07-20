const userService = require("../services/userService");
const User = require("../models/User");

exports.postRegister = async (req, res) => {
  console.log("register");
  try {
    const newUser = await userService.registerUser(req.body);
    console.log(newUser);
    res
      .status(201)
      .json({ message: "User registered successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.loginUser(email, password);

    res.status(200).json({
      message: "Logged in successfully",
      token,
      userName: user.username,
      userId: user._id,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
};

exports.postCheckPassword = async (req, res) => {
  try {
    console.log("check");
    const enteredPassword = req.body.password;

    const result = await userService.checkPassword(enteredPassword);
    if (result) {
      res.status(200).json({ message: "Right Password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.postLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while logging out",
      error: error.message,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  console.log("GET /users hit");
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching users",
      error: error.message,
    });
  }
};
