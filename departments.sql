USE bamazon;
CREATE TABLE departments(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50),
    over_head_costs INT(10),
    PRIMARY KEY (department_id)
)

INSERT INTO departments(department_name,over_head_costs)
VALUES ("Accessories", 4000);
INSERT INTO departments(department_name,over_head_costs)
VALUES("Paper Products", 3000);
INSERT INTO departments(department_name,over_head_costs)
VALUES ("Electronics", 7000);
INSERT INTO departments(department_name,over_head_costs)
VALUES ("Kitchen Stuff", 2000);
INSERT INTO departments(department_name,over_head_costs)
VALUES ("Food", 6000);
INSERT INTO departments(department_name,over_head_costs)
VALUES ("Other",2500)