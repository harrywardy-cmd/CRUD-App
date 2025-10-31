import User from "../model/userModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const create = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    // Check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      ...rest,
    });

    await newUser.save();

    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //  Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    const updatedData = { ...req.body };

    //Hash password if it's being updated
    if (updatedData.password) {
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(updatedData.password, salt);
    }

    await User.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({ message: "User updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message }); 
  }
};

export const deleteUser = async(req, res) =>{
  try{
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist){
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({message:"User deleted successfully."});

  }catch (error){
    res.status(500).jason({errorMessage: error.message});
  }
};


