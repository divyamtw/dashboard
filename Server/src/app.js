import "dotenv/config";
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import passport from "./config/passport.js";

const app = express();

import cors from "cors";

const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // frontend URL
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (_, res) => {
  res.send("Hello, Dev!");
});

// Routes ----> import
import authRouter from "./routes/auth.routes.js";
import githubAuthRouter from "./routes/github.routes.js";

app.use("/api/auth", authRouter);
app.use("/auth", githubAuthRouter);



export default app;
