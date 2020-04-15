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
    listProducts();
    buy();
})

//listing products to customer upon program run
function listProducts(){
    connection.query("SELECT item_id, product_name, price FROM products", function(err, res){
        if (err) throw err;
        console.table(res);
    });
}

//controls prompting customer to buy, relists and reprompts if out of stock
function buy(){
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
        let item = answer.id;
        let amount = answer.quantity
        connection.query("SELECT stock_quantity FROM products WHERE ?", {item_id: answer.id}, function(err,res){
            if(err) throw err;
            let stock = res[0].stock_quantity
            if(answer.quantity>stock){
                console.log("Insufficient quantity!")
                listProducts();
                buy();
            } 
            else{ 
                connection.query("UPDATE products SET ? WHERE ? ", [{stock_quantity:stock-answer.quantity},{item_id:answer.id}], function(err,res){
                    if (err) throw err;
                    connection.query("SELECT price,product_sales FROM products WHERE ?", {item_id:item}, function (err,res){
                        if(err) throw err;
                        let sales = res[0].product_sales
                        let price = res[0].price
                        let bill = price * amount
                        console.log("Your total bill is: $"+ bill );
                    connection.query("UPDATE products SET ? WHERE ?", [{product_sales:sales+bill},{item_id:answer.id}])
                    })
                    
                })
                }
        })
    })}
    
    

    
