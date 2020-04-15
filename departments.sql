USE bamazonDB;
CREATE TABLE departments(
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50),
    over_head_costs INT(10),
    PRIMARY KEY (department_id)
)