import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();

// POST /register route for registering a new user
router.post(
  "/register",
  // Express Validator to check input fields
  // Checks if particular string is in body of request, otherwise returns error
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    try {
      // Checks if email already registered
      let user = await User.findOne({
        email: req.body.email,
      });
      // Return error if email is already in use
      if (user) {
        return res.status(400).json({ message: "User already registered" });
      }
      // If email not in use, it will take the details (name/email/password) to create a user
      user = new User(req.body);
      await user.save(); // Save the user to the database

      // Generate a JWT for the newly registered user
      const token = jwt.sign(
        { userId: user.id }, // Payload: user ID
        process.env.JWT_SECRET_KEY as string,
        {
          expiresIn: "1d",
        }
      );
      // Set the token as a cookie in the response
      res.cookie("auth_token", token, {
        httpOnly: true, // Cookie accessible only by the server
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });
      // Send a success response
      return res.status(200).send({ message: "User registered OK" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Something went wrong" });
    }
  }
);

export default router;
