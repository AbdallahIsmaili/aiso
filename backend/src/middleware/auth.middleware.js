import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - no token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - user not found" });
    }

    req.user = user; // Attach the user to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.error("Error in protectMiddleware:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
