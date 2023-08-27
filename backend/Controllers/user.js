import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../Models/user.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exist!"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password!"});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1hr"});

        console.log("backend... token");
        res.status(200).json({ result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong.'});
    }
}

export const signup = async (req, res) => {
    const { email, password, fullName, interests, education } = req.body;
    console.log("User Signed up");
    try {
        const existingUser = await User.findOne({ email });
        console.log("Existing User: ", existingUser);

        if (existingUser) return res.status(400).json({ message: "User already exists!"});
        const hashedPassword = await bcrypt.hash(password, 8);

        const result = await User.create({ email, password: hashedPassword, name: `${fullName}`, interests: `${interests}`, education: `${education }` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1hr"});
        console.log("backend... token");
        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong.'});
        console.log(error);
    }
}

export const updateProfile = async (req, res) => {
    const userId = req.userId;
    console.log("updated...", userId);
    const { email, name, interests, education } = req.body;
    
    try {
        const updatedProfile = { email, name, interests, education, _id: userId };
        await User.findByIdAndUpdate( userId, updatedProfile , { new: true } );
        console.log("updated... profile");
        console.log("updated... p", updatedProfile);
  
      res.status(200).json(updatedProfile);
    } catch (error) {
      res.status(500).json({ message: 'Profile update failed', error: error.message });
    }
  };

