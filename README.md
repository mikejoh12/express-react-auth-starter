# Express-React-Auth-Starter

This project is a quick boilerplate starter for a full stack project using the PERN stack (Postgres, Express, React, Node.js) and includes authentication with passport/express-session. It was created to speed up the initial development phase of a web-app with user log-in. It assumes that you have postgres locally installed, know how to create a database and a few tables, and are familiar with using a .env file in node.js.

## Status
The project is under development. Feedback and contributions are appreciated. Currently tests are not included. Password reset is also not includes as it typically requires e-mail integration.

### Technologies used
The backend uses express, passport (passport-local strategy), express-session, pg, connect-pg-simple, helmet, and express-validator. It requires a postgres database with 2 tables with the names users and session (for saving the sessions with express-session). Routes are documented with Swagger-UI.

The front-end uses React, React-router v6, and mui (Material UI) v5. RTK Query (Redux-Toolkit Query) is used to simplify fetching of API related state.

### Installation instructions
1. Create a local postgres database with postgres called auth_starter (or choose another name and configure .env with that). SQL Command:
```
CREATE DATABASE auth_starter;
```

2. Create 2 db tables in the new db. A users table:
```
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "email" varchar(100) UNIQUE NOT NULL,
    "first_name" varchar(100) NOT NULL,
    "last_name" varchar(100) NOT NULL,
    "pwd_hash" varchar(100),
  );
```
A table used by express-session/connect-pg-simple to store the session information in the db. Described in more detail on https://www.npmjs.com/package/connect-pg-simple:
```
CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");
```
3. Rename the file that is called sample.env to just .env so that environmental variables will be loaded by the dotenv library. The file will have the following variables:
```
PORT=5000
DB_USER=
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=auth_starter

SESSION_SECRET=TopSecret
```
Configure DB_USER and DB_PASSWORD for your local postgres connection. If you choose a different name for the database than auth_starter, then change DB_DATABASE to equal the new db name.
4. Run npm install in the root directory. This installs the back-end express server dependencies.
5. Run npm install in the client/ directory. This installs the front end React project dependencies.
6. The project has concurrently and nodemon as dev-dependencies. Concurrently restarts upon code-changes and concurrently allows easy starting of both server and client with one command. To start both the express server and React development server from the project root directory, type:
```
npm start
```
