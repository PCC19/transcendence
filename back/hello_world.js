const fs = require("fs");

fs.writeFileSync("lixo.txt", "Hi there ...");

const sh = require("superheroes");
console.log(sh.random());

chalk = require("chalk")
//import chalk from "chalk";

console.log(chalk.blue.bgRed(sh.random()));

const moment = require("moment");
const time = new Date();
const parsedTime = moment(time).format("hh:mm:ss");
console.log(chalk.yellow(parsedTime));


const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = new express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
pTime = 1;
app.get("/", (req, res) => {
	//pTime = moment(time).format("hh:mm:ssss");
	pTime = pTime + 1;
	console.log("ptime: ", pTime);
	res.render("index", {
		author: pTime,
	});
});
app.use(express.static(path.join(__dirname, "/public")))
app.listen(3000, () => {
	console.log("Server Running on port 3000");
});
