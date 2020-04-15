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
    * Add a New Product to the database
2. Each time an action is completed as a manager, the mainmenu will pop up so they can do another task.



