CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" varchar(100) UNIQUE NOT NULL,
    "first_name" varchar(100) NOT NULL,
    "last_name" varchar(100) NOT NULL,
    "pwd_hash" varchar(100)
  );