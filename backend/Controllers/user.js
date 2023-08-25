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

        res.status(200).json({ result, token});
    } catch (error) {
        res.status(500).json({ message: 'Oops! Something went wrong.'});
    }
}

