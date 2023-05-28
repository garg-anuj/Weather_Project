const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.port || 3000;

const staticPath=path.join(__dirname,"../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials")

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    // res.send("project server started ");
    res.render("index.hbs");
});

app.get("/about", (req,res)=>{
    // res.send("project kaa about page");
    res.render("about.hbs");
});

app.get("/weather", (req,res)=>{
    res.render("weather");
});

app.get("*", (req,res)=>{
    // res.send("404 PAGE NOT FOUND");
    res.render("404error",{
        errorMsg:"oops page not found"
    });
});



app.listen(port,()=>{
    console.log(`listen project port no http://localhost:${port}`);
})