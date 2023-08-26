const mongoose = require('mongoose');
require("dotenv").config();
const URL = process.env.URL;


mongoose.connect(URL)
.then(res=>console.log("connected"))
.catch(err=>console.log("err"));