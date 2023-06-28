const express=require("express");
const bodyParser=require("body-parser");
const fs=require("fs");
const path = require("path");
const app = express();
const HomePage=require("./Routes/homepage")
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(HomePage)
app.use((req,res)=>{
    res.status(404).send("<h1>Page not Found</h1>")
  })

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})