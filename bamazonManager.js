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
    mainMenu();
    
})

function mainMenu(){
    inquirer.prompt([
        {
            type:"list",
            name:"menu",
            message:"What would you like to do?",
            choices:["View Products for Sale", "View Low Inventory","Add to Inventory", "Add New Product"]
        }
    ]).then(function(answer){
        switch(answer.menu){
            case "View Products for Sale":
                connection.query("SELECT item_id,product_name,price,stock_quantity FROM products ", function(err,res){
                    if (err) throw err;
                    console.table(res);
                })
                break;
            case "View Low Inventory":
                connection.query("SELECT product_name, stock_quantity FROM products WHERE stock_quantity<5",function(err,res){
                    if (err) throw err;
                    console.table(res);
                })
                break;
            case "Add to Inventory":
                inquirer.prompt([
                    {
                        type:"input",
                        name:"product",
                        message: "Which product would you like to add inventory to?"
                    },
                    {
                        type: "input",
                        name: "amount",
                        message: "How much inventory would you like to add?"
                    }
                ]).then(function(answer){
                    connection.query("SELECT stock_quantity FROM products WHERE ?", {product_name:answer.product}, function(err,res){
                        if (err) throw err;
                         var stock = res[0].stock_quantity;
                        console.log(stock);
                        connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: stock + parseInt(answer.amount)},{product_name:answer.product}], function(err,res){
                            if (err) throw err;
                            console.log(answer.product + " inventory increased by " +answer.amount);
                        })

                    })
                    
                })
                break;
            case "Add New Product":
                console.log("this is totes new");
                break;
        }

    })
}