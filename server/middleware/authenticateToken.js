const jwt = require("jsonwebtoken");
const config = require("../config/config.json");
const { UserSession } = require("../models");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  } else {
    const jwtSecret = config.development.jwtSecret;
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;

      const session = await UserSession.findOne({
        where: { user_id: decoded.userId },
      });

      if (!session) {
        return res.status(401).json({ message: "No existing session." });
      } else {
        const currentDate = new Date();
        if (currentDate > session.date_expired) {
          return res.status(401).json({ message: "Session expired." });
        } else {
          next();
        }
      }
    } catch (err) {
      console.error(err);
      if (err.name === "TokenExpiredError") {
        return res.status(403).json({ message: "Session expired." });
      } else {
        return res.status(403).json({ message: "Invalid token." });
      }
    }
  }
};

module.exports = authenticateToken;
