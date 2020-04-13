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
    inquirer.prompt([
        {
         type: "input",
         name:"id",
         message:"What is the ID # of the product you wish to purchase?"
        },
        {
         type: "input",
         name:"quantity",
         message:"How many units would you like to purchase?"
        },
    ]).then(function(answer){
        console.log("id : " + answer.id, "amount: " + answer.quantity)
        connection.query("SELECT stock_quantity FROM products WHERE ?", {item_id: answer.id}, function(err,res){
            if(err) throw err;
            console.log(res[0].stock_quantity);
            let stock = res[0].stock_quantity
            if(answer.quantity>stock){
                console.log("Insufficient quantity!")
            } else{ console.log("You bought this thang(s)!")}
        })
    })
})

function listProducts(){
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
    });
}
    
    

    
