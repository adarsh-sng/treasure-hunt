const Team = require("../models/team_signup.models.js");

const teamNames = [
    "The Gold Diggers",
    "Hidden Clue Hunters",
    "The Lost Explorers",
    "X Marks the Spot"
];

function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!";
    let password = "";
    for (let i = 0; i < 8; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

async function saveTeamsToDB() {
    try {
        for (const name of teamNames) {
            const pass = generatePassword();
            await Team.create({ teamName: name, password: pass });
            console.log(`Saved: ${name} | Password: ${pass}`); 
        }
        console.log("All teams saved successfully.");
    } catch (error) {
        console.error("Error saving teams:", error);
    }
}

module.exports = saveTeamsToDB;
