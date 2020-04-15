//adding required packages
var mysql= require("mysql");
var inquirer = require("inquirer");

//creating connection with mySQL DB
var connection = mysql.createConnection({
    host:"localhost",

    port: 3306,

    user: "root",

    password:"4153FFSQLPW",

    database:"bamazon"
});

//when program is run....
connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id: "+ connection.threadId);
    supervisor();
    
})

function supervisor(){
    inquirer.prompt([
        {
            type:"list",
            name:"menu",
            message: "What to do?",
            choices: ["View Products by Department","Create New Department"]
        }
    ]).then(function(answer){
        switch(answer.menu){
            case "View Products by Department":
                console.log("VPBD");
                break;
            case "Create New Department":
                console.log("new d");
                break;
        }
    })
}