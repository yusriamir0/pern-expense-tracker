CREATE DATABASE transaction 

-- transaction id 
CREATE TYPE account_type AS ENUM(
    'Savings',
    'Invesment',
    'Checking',
    'Credit card',
    'Building',
    'School',
    'Project',
    'Utilities',
    'Travel',
    'Personal'
    'Loan',
    'Organization',
    'Grocery',
    'Food',
    'Entertainment',
    'Other',
) 

CREATE TABLE transaction(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    account_type account_type,
    initial_balance NUMERIC(7,2) 0,
    transaction 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    account_type account_type NOT NULL,
    
)

