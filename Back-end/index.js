let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const rt = require("./Rts/Rts");

mongoose.connect("mongodb://127.0.0.1:27017/hosp_mngt_db_demo").then(() => {
    console.log("Connected to database")
        }).catch((err) => {
    console.log("Database connection error:", err)
        });

let app = express();
app.use(express.json());
app.use(cors());
app.use("/", rt);

app.listen(5000);