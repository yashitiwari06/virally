const mongoose = require("mongoose");

const connection_string = "mongodb+srv://yashi:vIOiKkglGp4SWq0p@cluster0.sehujtd.mongodb.net/virallyAuthDb?appName=Cluster0";
const dbConnection = () => {
    mongoose.connect(connection_string)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = { dbConnection };