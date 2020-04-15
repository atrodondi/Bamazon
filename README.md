# Bamazon
Project in Node/MySQL, mock online store 

This is a simple Node app using a local MySQL fake database to mimic an online store allowing customers to view products for sale and purchase them, managers to see products for sale, view low inventory, add to inventory, etc. and for supervisors to view overall profits and sales by department and add a new sales department.

# How to get started
1. Make sure the database Schema is run in the MySQL workbench to get the starter DB up and working
2. Then open the terminal in VS CODE or your Bash and make sure to install the package.json by typing ***npm install*** in your terminal
3. Then run either the customer, manager or supervisor program by running the file in the terminal. i.e 
        ![start](https://github.com/atrodondi/Bamazon/blob/master/images/start.png)

# Customer App
1. Once the program is run, a table of all the products for sale will populate the terminal. 
2. The customer will be asked to type in the ID of the product they wish to buy.
3. Then the customer will be asked how many of that product they wish to buy.
4. If there is enough of that product in stock, their purchase will be sucessful and their bill will be shown in the terminal, while the database will be updated to reflect invetory and sales information.

Here is a short example of the program in action: https://drive.google.com/file/d/1vKd9SLcr482IrkvC2Yq9doUXgB5wrFGw/view


# Manger App
1. Once the program is run, the manager will be asked whether they want to:
    * View Products for Sale
    * View Products that have a quantity lower than 5 (low inventory)
    * Add inventory to any product in the database - *product name is case sensitive*
    ![manager](https://github.com/atrodondi/Bamazon/blob/master/images/manager.png)
    * Add a New Product to the database
2. Each time an action is completed as a manager, the mainmenu will pop up so they can do another task.

Here is a short example of the program in action: https://drive.google.com/file/d/1oyJ8tCNJZ2grMuglZA7F80rTYuQlXKVM/view


# Supervisor App
1. Once the program is run, the supervisor will be asked whether they want to:
    * View Product Sales by Department - this will dynamically compute profits of each department by subtracting over head costs from sales and combining databases to produce a table of data to the supervisor.
        ![supervisor](https://github.com/atrodondi/Bamazon/blob/master/images/supervisor.png)
    * Add a New Department to the department database

Here is a short example of the program in action: https://drive.google.com/file/d/1AEAUaHScMXMu9v7v1Z-RSsG_I2o_3ZvB/view

# Why?
This was a fun way to learn how to read and write to a database all while providing an end user a specific experience whether it be to purchase or to maintain stats or inventory! Very fun project to get feet wet in how an online store or other website/app could function to provide information, store information whether it be for business or for pleasure. Super cool.

# Technologies

* Node.js
* MySQL Workbench
* npm packages - mysql, inquirer

# Developer
 Developed and Maintained by Me, [A. Rodondi](https://github.com/atrodondi) 