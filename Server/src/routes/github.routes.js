import express from "express";
import passport from "passport";
import { githubAuthCallback } from "../controllers/github.controller.js";

const router = express.Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5173"}/login`,
  }),
  githubAuthCallback,
);

export default router;
