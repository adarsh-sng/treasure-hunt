const express = require('express');
const app = express();


const connectDB = require('./config/db');
const saveTeamsToDB = require('./config/password');
const PORT = process.env.PORT || 3000;

connectDB();
saveTeamsToDB();

app.get('/',(req,res)=>{
    res.send('Api is up!')
  })
  app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
  });