import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export async function signup(req, res) {
    const {email, password, fullName} = req.body;

    try {
        if(!email || !password || !fullName) {
            return res.status(400).json({message: 'Please fill all fields!'});
        }
        if(password.length < 8) {
            return res.status(400).json({message: 'Password must be at least 8 characters!'});
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({message: 'Please enter a valid email!'});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message: 'Email already exists!'});
        }

        const idx = Math.floor(Math.random() * 100) + 1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

        const newUser = await User.create({
            email,
            password,
            fullName,
            profilePic: randomAvatar,
        });


        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });


        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        })

        res.status(201).json({success: true, user: newUser, message: 'User created!'});

    } catch(error) {

        console.log("Error in signup controller: ", error);
        return res.status(500).json({message: 'Internal server error!'});
    }
    
}

export async function login(req, res) {
    res.send('User logged in!');
}

export function logout(req, res) {
    res.send('User logged out!');
}