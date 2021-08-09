
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

//create express app
const app = express();

//set origin
var corsOptions = {
origin: "http://localhost:8081"
};

//add cors and bodyPerser modules to the express app
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//call sync mettod
//db.sequelize.sync();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
 
//simple route
app.get("/", (req, res) =>{
	res.json({
		massage: "Welcome to the task management system"
	});
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;

//call routes
require("./app/routes/task.routes")(app);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} `);
});