// app.js
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { sendEmail } from "./utils/sendEmail.js";

// Load environment variables
config({ path: "./config.env" });

const app = express();
const router = express.Router();

// Middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "merndeveloper4@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => {
    console.log(" Connected to MongoDB");
    app.listen(process.env.PORT, () =>
      console.log(` Server running at http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(" MongoDB connection error:", err));


