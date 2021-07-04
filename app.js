const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.listen(3030,()=> console.log("servidor corriendo en http://localhost:"+port))

app.use(express.static("public"));

app.get("/",(req,res) => res.sendFile(path.join(__dirname, "/views/home.html")))