
CREATE TABLE employees (
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
emp_id INTEGER NOT NULL,
job_title VARCHAR(50) NOT NULL,
annual_salary INTEGER NOT NULL,
status VARCHAR NOT NULL
);

INSERT INTO employees (first_name, last_name, emp_id, job_title, annual_salary, status)
VALUES ('Ed', 'Smith', '3333', 'CEO', '120000', 'Active'),
('Ted', 'Smith', '3334', 'CFO', '120000', 'Active'),
('Fred', 'Smith', '3335', 'CTO', '120000', 'Active');
