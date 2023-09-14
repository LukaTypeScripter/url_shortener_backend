const express = require('express');
const connectDb = require("./config/db");

const app = express();
connectDb()
app.use(express.json({extented:true}))
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))
const PORT = 3000


app.listen(PORT, () =>console.log(`server running on port ${PORT}`))