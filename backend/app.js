const express = require('express');
const app = express();
const authRouter = require("./controllers/authRouter");
const { dbConnection } = require("./db");
const cors = require('cors');
const cookieParser = require('cookie-parser');

dbConnection();

//using middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());

app.use("/",authRouter);



app.listen(3000,() => {
    console.log("Your app is listening on port 3000");
});