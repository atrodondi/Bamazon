var mysql= require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host:"localhost",

    port: 3306,

    user: "root",

    password:"4153FFSQLPW",

    database:"bamazon"
});

connection.connect(function(err){
    if(err) throw err;

    console.log("connected as id: "+ connection.threadId);
    listProducts();
})

function listProducts(){
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
    });
}
    
    

    
