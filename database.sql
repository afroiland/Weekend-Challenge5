
CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
emp_id INTEGER NOT NULL,
job_title VARCHAR(50) NOT NULL,
annual_salary INTEGER NOT NULL,
active BOOLEAN NOT NULL
);

INSERT INTO employees (first_name, last_name, emp_id, job_title, annual_salary, active)
VALUES ('Ed', 'Smith', '3333', 'CEO', '120000', true),
('Ted', 'Smith', '3334', 'CFO', '120000', true),
('Fred', 'Smith', '3335', 'CTO', '120000', true);
