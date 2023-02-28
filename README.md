# Bank_Branches

Problem statement: To create a REST service that can fetch bank details, using the data given in the API’s query parameters. Using the data available in the repository in the backend DB.

Case 1*

==> Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset. Request URL - /api/search?q=Mumbai&limit=2&offset=1

Case 2*

==>Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset Request URL - /api/branch?q=LONI&limit=1&offset=1

Procedure: Create a nodejs application by creating a folder and running the following commands. -->npm init -->npm install express --save -->npm install pg --save After this node_modules folder will be created. Follow the procedure in index.js

Import express,pg and bodyparser. Express is for creating API. pg is for adding postgreSQL database.
Use get() function from express to get the API and create a query for CASE 1 (/search/API). Return the rows that responds to the query.
Use get() function from express to get the API and create a query for CASE 2 (/branch/API). Return the rows that responds to the query.
Run using node or npm start
Push the project into GITHUB to deploy.
