// jshint eversion:6
const express = require("express");
const bodyParser = require("body-parser");

let items=[];

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/", function(req,res) {
  let today = new Date();
  let options = {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  };
  let day = today.toLocaleDateString("en-US",options);

  res.render("list", {kindOfDay:day, newItemList:items});
});
app.post("/",function(req,res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})
app.listen(3000, function() {
  console.log("server active and running on port 3000");
});
