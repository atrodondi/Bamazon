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
            choices: ["View Product Sales by Department","Create New Department"]
        }
    ]).then(function(answer){
        switch(answer.menu){
            case "View Product Sales by Department":
                connection.query( "SELECT department_id,departments.department_name,over_head_costs,SUM(product_sales) AS product_sales, SUM(product_sales)-over_head_costs AS total_profit FROM departments INNER JOIN products on products.department_name = departments.department_name GROUP BY department_id", function(err,res){
                    if (err) throw err;
                    console.table(res);
                    
                   
                })
                break;
            case "Create New Department":
                console.log("new d");
                break;
        }
    })
}