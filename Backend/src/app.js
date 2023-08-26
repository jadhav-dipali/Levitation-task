const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
require("./db/connection");
const router = require("./router/register");
const infoUser = require("./router/userInfo")
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/user",  router);
app.use("/userInfo" , infoUser);


app.listen(PORT , ()=>{
    console.log(`listening Port ${PORT}`);
})