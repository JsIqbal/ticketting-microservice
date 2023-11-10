import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post(
    "/api/users/signup",
    [
        body("email").isEmail().withMessage("Email must be valid"),
        body("password")
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage("Password must be between 4 and 20 characters"),
    ],
    (req: Request, res: Response) => {
        const { email, password } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Error("Invalid email or password");
        }

        console.log("Creating a user ....");
        throw new Error("Internal Server Error");

        res.send({});
    }
);

export { router as signupRouter };
