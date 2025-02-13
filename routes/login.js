const express = require("express");
const jwt = require("jsonwebtoken");
const Team = require("../models/team_signup.models"); 
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY;

const router = express.Router();

router.post("/login", async (req, res) => {
    const { teamName, password } = req.body;

    try {
        const team = await Team.findOne({ teamName });
        if (!team) return res.status(400).json({ message: "Invalid credentials" });

        if (password !== team.password) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ teamName: team.teamName }, SECRET_KEY, { expiresIn: "2h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
