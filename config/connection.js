//setting up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 8080,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

//Make the connection
connection.connect(function(err){
	if(err){
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

//Export the established connection for ORM.js to use
module.exports = connection;