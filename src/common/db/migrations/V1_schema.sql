-- Bảng người dùng
CREATE TABLE IF NOT EXISTS  "user" (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    proof_image_url TEXT,
    is_manage BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng đóng quỹ
CREATE TABLE IF NOT EXISTS contribution (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount NUMERIC NOT NULL,
    debt_paid NUMERIC NOT NULL DEFAULT 0,
    fund_added NUMERIC NOT NULL,
    date DATE NOT NULL,
    image_transaction TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng chi tiêu
CREATE TABLE IF NOT EXISTS expense (
    id SERIAL PRIMARY KEY,
    buyer_id INT NOT NULL,
    total_amount NUMERIC NOT NULL,
    date DATE NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bảng mục chi tiêu
CREATE TABLE IF NOT EXISTS expense_item (
    id SERIAL PRIMARY KEY,
    expense_id INT NOT NULL,
    item_name TEXT NOT NULL,
    amount NUMERIC NOT NULL,
    is_shared BOOLEAN NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS transfer (
    id SERIAL PRIMARY KEY,
    from_user_id INT NOT NULL,
    to_user_id INT NOT NULL,
    amount NUMERIC NOT NULL,
    date DATE NOT NULL,
    proof_image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE expense_item
ADD column is_paid BOOLEAN NOT NULL DEFAULT FALSE;



