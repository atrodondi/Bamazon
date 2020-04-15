-- creating database
CREATE DATABASE bamazon;
-- declaring use of newly made database
USE bamazon;
-- creating products table and the columns in the table
CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price DECIMAL (15,2),
    stock_quantity INT(50),
    PRIMARY KEY (item_id)

);
-- putting values into table
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Phone Case", "Accessories", 12.99, 54);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Toilet Paper", "Paper Products", 3.99, 2);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Laptop", "Electronics", 900.00, 14);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Toothpicks", "Kitchen Stuff", 00.03, 9876);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Cheese", "Food", 8.99, 453);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Glasses", "Accessories", 28.00, 90);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("VCR", "Electronics", 18.99, 37);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Spatula", "Kitchen Stuff", 13.75, 84);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Napkins", "Paper Prodcuts", 2.99, 378);
INSERT INTO products(product_name, department_name,price,stock_quantity)
VALUES ("Salted Almonds", "Food", 6.99, 102 );

-- adding products sales column for bonus part
ALTER TABLE products ADD product_sales DECIMAL(15,2) default 0;


