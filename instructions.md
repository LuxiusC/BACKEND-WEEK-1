### Get and Update Novels API

#### Task:

Extend an existing Express.js application to retrieve and update novels in the database.


#### Instructions:

1. **Create a Books Table using NeonConsole:**

   - Columns:
     - id - primary key, auto-increment
     - title - string
     - author - string
     - year_published - integer

2. **Get a Novel by ID (GET /novels/:id)**

   - Implement a route that returns a single novel based on its id
   - If the novel exists, return it as JSON
   - If not, return a 404 status with an error message

3. **Update a Novel (PUT /novels/:id)**
   
   - Implement a route that allows users to update:
     - title
     - author
     - year_published
   - Validate that all fields are provided:
     - If not, return a 400 status with an error message
     - Ensure year_published is a number
   - If the novel exists:
     - Update the record in the database
     - Return the updated novel
   - If the novel does not exist:
     - Return a 404 status with an error message 


4. **Expected Interactions:**

   - **GET /novels/:id:**

     - Send a GET request to /novels/:id
     - Example:
       
       `GET /novels/1`

     - Response:
       ```json
       {
         "id": 1,
         "title": "1984",
         "author": "George Orwell",
         "year_published": 1949
       }
       ```

   - **PUT /novels/:id:**
     - Send a PUT request with a JSON body:
       ```json
       {
         "title": "1984 (Updated)",
         "author": "George Orwell",
         "year_published": 1949
       }
       ```
     - Response:
       ```json
       {
         "id": 1,
         "title": "1984 (Updated)",
         "author": "George Orwell",
         "year_published": 1949
       }
       ```
       
5. **Reference:**
   - Creating an Express application: https://expressjs.com/en/5x/api.html 

   - Express Routing: https://www.w3schools.com/nodejs/nodejs_express.asp#BasicRouting 

   - PostgreSQL with Node.js: Connection: https://neon.com/docs/guides/express (node-postgres)

   - PostgreSQL with Node.js: Query: https://marmelab.com/postgres-queries/pool.html 

   - PostgreSQL CREATE Table: https://www.w3schools.com/postgresql/postgresql_create_table.php

   - PostgreSQL SELECT: https://www.w3schools.com/postgresql/postgresql_select.php 

   - PostgreSQL INSERT: https://www.w3schools.com/postgresql/postgresql_insert_into.php 

   - PostgreSQL UPDATE: https://www.w3schools.com/postgresql/postgresql_update.php 
