const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Session = require("../models/Session");

const secretKey = "your-secret-key";

const registerUser = async (userData) => {
  console.log("registerService", userData);
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("Email already exists");
  }

  if (userData.password !== userData.confirmPassword) {
    throw new Error("Passwords do not match");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);

  const user = new User({
    username: userData.fullName,
    fullName: userData.fullName,
    email: userData.email,
    password: hashedPassword,
    phone: userData.phone,
  });
  console.log("new", user);

  return await user.save();
};

const loginUser = async (email, password) => {
  console.log(`Looking for user with email: ${email}`);
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found, please sign up.");
  }

  const doMatch = await bcrypt.compare(password, user.password);
  if (!doMatch) {
    console.log("Passwords don't match");
    throw new Error("Invalid password, please try again.");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      userName: user.username,
      email: user.email,
      role: user.role,
      phone: user.phone,
    },
    secretKey,
    { expiresIn: "30d" },
  );

  return { user, token };
};

const checkPassword = async (enteredPassword) => {
  try {
    const admins = await User.find({ role: "admin" });

    for (const admin of admins) {
      const isMatch = await bcrypt.compare(enteredPassword, admin.password);
      if (isMatch) {
        return true;
      }
    }

    throw new Error("Password is incorrect");
  } catch (error) {
    throw error;
  }
};
const logoutUser = async (token) => {};

const getAllUsers = async () => {
  try {
    const users = await User.find().populate("reviews");
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Could not fetch users");
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkPassword,
  logoutUser,
  getAllUsers,
};
