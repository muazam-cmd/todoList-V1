const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();
let Items = ["Wake up at 9", "breakfast at 12", "shower at 2"];
workItems = [];
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', function (req, res) {

    let day = date.getDate();


    res.render("list", { ListTitle: day, newListItems: Items });
});

app.post('/', function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work")
    }
    else {
        Items.push(item);
        res.redirect("/");
    }
})

app.get("/work", function (req, res) {
    res.render("list", { ListTitle: " work list", newListItems: workItems });
});

app.get("/about", function (req, res) {
    res.render("about")
})

app.get("/about")
app.listen(3000, function () {
    console.log("Server started on port 3000.");
});

