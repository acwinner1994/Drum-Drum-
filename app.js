const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');//set view engine, so no need to add .ejs at the end
app.use(express.static("public"));//place custom style sheet
app.use(bodyParser.urlencoded({extended: true}));
//home page
app.get("/",function(req,res){
  res.render("index");
});

let port=process.env.PORT;
if(port==null||port==""){
  port=3002;
}

app.listen(port, function() {
  console.log("Server started on port 3002~");
});
