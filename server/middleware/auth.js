import jwt from "jsonwebtoken";

// Verify JWT token middleware
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // attach user info to request
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};


// Verify admin role middleware
export const verifyAdmin = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "User info missing." });

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }

  next();
};