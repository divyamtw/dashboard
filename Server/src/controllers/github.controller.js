import User from "../models/auth.model.js";
import generateAccessToken from "../utils/generateAccessToken.js";

const githubAuthCallback = async (req, res) => {
  try {
    if (!req.user) {
      return res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=auth_failed`);
    }

    const accessToken = generateAccessToken(req.user);

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/`);
  } catch (error) {
    console.error("GitHub Auth Callback Error:", error);
    return res.redirect(`${process.env.FRONTEND_URL || "http://localhost:5173"}/login?error=server_error`);
  }
};

export { githubAuthCallback };
