const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  User,
  UserSession,
  UserRole,
  UserStatus,
  Employee,
} = require("../models");
const config = require("../config/config.json");

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username },
    include: [
      {
        model: UserRole,
        as: "userRole",
        attributes: ["user_role_desc"],
      },
      {
        model: UserStatus,
        as: "userStatus",
        attributes: ["user_status_desc"],
      },
      {
        model: Employee,
        as: "employee",
        attributes: ["emp_fname", "emp_lname", "emp_email", "emp_contact"],
      },
    ],
  });

  if (!user) {
    return res.status(400).json({
      message: "User account does not exists.",
    });
  } else {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials.",
      });
    } else {
      const jwtSecret = config.development.jwtSecret;
      const accessToken = jwt.sign(
        { username: user.username, userId: user.user_id },
        jwtSecret,
        {
          expiresIn: "1h",
        }
      );
      const refreshToken = jwt.sign(
        { username: user.username, userId: user.user_id },
        jwtSecret,
        {
          expiresIn: "7d",
        }
      );

      const dateCreated = new Date();
      const dateExpired = new Date(dateCreated);
      dateExpired.setHours(dateExpired.getHours() + 1);

      try {
        const existingSession = await UserSession.findOne({
          where: { user_id: user.user_id },
        });

        if (existingSession) {
          await UserSession.update(
            {
              date_created: dateCreated,
              date_expired: dateExpired,
              access_token: accessToken,
              refresh_token: refreshToken,
            },
            { where: { user_id: user.user_id } }
          );
        } else {
          await UserSession.create({
            user_id: user.user_id,
            date_created: dateCreated,
            date_expired: dateExpired,
            access_token: accessToken,
            refresh_token: refreshToken,
          });
        }

        const responseData = {
          username: user.username,
          firstName: user.employee.emp_fname,
          lastName: user.employee.emp_lname,
          mobileNumber: user.employee.emp_contact,
          emailAddress: user.employee.emp_email,
          role: user.userRole.user_role_desc,
          status: user.userStatus.user_status_desc,
          accessToken: accessToken,
          refreshToken: refreshToken,
        };

        return res.json({
          status: "success",
          message: "Login successful",
          payload: responseData,
        });
      } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  }
};

module.exports = { login };
