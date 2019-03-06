const express = require('express');
const app = express();
const path = require('path');
const members = require('./members.js')
const logger = require('./middleware/logger.js')


//Initalize middleware
app.use(logger);

app.get('/api/members/:ided',(req,res)=>{
    res.json(members.filter((member)=>
        member.id === parseInt(req.params.ided) ))
})

app.get('/api/members',(req,res)=>
    res.json(members));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`));