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

// manager can view all products for sale
            case "View Products for Sale":
                connection.query("SELECT item_id,product_name,price,stock_quantity FROM products ", function(err,res){
                    if (err) throw err;
                    console.table(res);
                    mainMenu();
                })
                break;
// manager can view products with inventory less than 5
            case "View Low Inventory":
                connection.query("SELECT product_name, stock_quantity FROM products WHERE stock_quantity<5",function(err,res){
                    if (err) throw err;
                    console.table(res);
                    mainMenu();
                })
                break;

// manager can add inventory to a chosen product
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
                        connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: stock + parseInt(answer.amount)},{product_name:answer.product}], function(err,res){
                            if (err) throw err;
                            console.log(answer.product + " inventory increased by " +answer.amount);
                            mainMenu();
                        })

                    })
                    
                })
                
                break;
// manager can add an entirely new product to the database
            case "Add New Product":
                console.log("this is totes new");
                inquirer.prompt([
                    {
                        type:"input",
                        name: "product",
                        message: "What is the name of the New Product You Wish to Add to our offered Products?"
                    },
                    {
                        type:"list",
                        name:"department",
                        message:"Which department does this product belong in?",
                        choices:["Accessories","Paper Products","Electronics", "Kitchen Stuff","Food","Other"]
                    },
                    {
                        type:"input",
                        name: "price",
                        message: "What is the price (accurate to two decimals places) of the new item?"
                    },
                    {
                        type:"input",
                        name:"stock",
                        message:"How many of the New Product are you adding?"
                    }
                ]).then(function(answer){
                    connection.query("INSERT INTO products (product_name,department_name,price,stock_quantity) VALUES (?, ?, ?, ?)",[answer.product,answer.department,parseFloat(answer.price),parseInt(answer.stock)], function(err,res){
                        if(err) throw err;
                        console.log(answer.stock +" '" +answer.product+"'" + " added Sucessfully!");
                        mainMenu();
                    })
                })
                break;
        }

    })
}