import User from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    if (user === null) {
      return res
        .status(404)
        .json({ message: "Cannot find User with this userId" });
    }
    res.send(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const userLogin = async (req, res) => {
  try {
    const users = await User.find({ email: req.body.email });
    if (users.length === 0) {
      return res.status(404).json({ message: "Cannot find User with this email" });
    }
    if (users[0].password === req.body.password) {
      res.send(users[0]);
    } else {
      res.status(403).json({ message: "Invalid credenteials" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
