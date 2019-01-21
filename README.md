# Population Management System
```Population Managent System``` is a simple API that allows Users to store up population details of unique locations and return the total population of the location when requested for. The API allows for a one level deep nesting of locations.


## What does it do

This is a Population Management System that contains a list of locations and the total number of residents in each location broken down by gender.
With this you can

- Create a new location containing data on the total number of male and female residents within it.
- List all available locations and their population summaries (total male residents, total female residents, sum total residents)
- Update data for a specific locations
- Delete a specified location


## Dependencies
The functionality of this web app being a node.js app depends on the following technologies.

[**Express.js**](https://expressjs.com/): A Fast, opinionated, minimalist web framework for node which was used in routing this application. 

[**BodyParser**](https://babeljs.io/): This module was used to collect search data sent from the client side to the routing page.

[**Sequelize**](https://www.sequelizejs.com): Sequelize is a promise-based Node.js ORM for Postgres Server which is the database server for the app. It features solid transaction support, relations, read replication and more.

[**Postgresql**](https://www.postgresql.org/): PostgreSQL is a powerful, open source object-relational database system.


## Installation

1. Install nodejs, postgresql, sequelize-cli if not installed.
2. Navigate to the directory you want it installed to. cd your folder
3. Clone the repository ``` https://github.com/Annettesunday/Population-Management-System.git ```.
4. Create a database(test and development) with PostgreSQL.
5. Open the Population-Management-System folder.
6. Create a .env file using the .env.example as a guide.
7. ``` npm install ``` to install all dependencies.
8. ``` npm run dev ``` to start the app in development mode.
9. ``` npm start ``` starts the app.
10. The app runs on port 8000


## The Population Management System API.
The API exposes the following endpoints for consumption:


 1. ```POST``` /location. The API takes the following parameters name, male, female. It creates a location. 
 2. ```GET``` /locations. Retrieves every available location. 
 3. ```GET``` /location/:name. Retrieves a location with the provided name. 
 4. ```DELETE``` /location/:name. The API takes the following parameters: name. It deletes the location with the provided name. 
 5. ```PUT``` /location/:name. The API takes the following parameters name, male, female. It edits the data of a location with the specified name 

## Test  
Tests are written with ``` Mocha ``` and ``` supertest ```.


 #### Contributing
---

1. Fork this repository to your account.
2. Clone your repository: git clone https://github.com/Annettesunday/Population-Management-System.git.
3. Commit your changes: git commit -m "did something".
4. Push to the remote branch: git push origin new-feature.
5. Open a pull request against develop branch

#### Licence
---

ISC

Copyright (c) 2019 Annette Sunday


