const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middleware/logger.js')
const routes = require('./routes/api/members.js')

//Initalize middleware
app.use(logger);
app.use('/api/members',routes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Listening to port ${PORT}`));

//npm run dev