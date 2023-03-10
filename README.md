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

SCREENSHOTS OF OUTPUT:
USING SUPABASE:
Case 1:Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
https://bank-branches.vercel.app/api/search?q=Mumbai&limit=2&offset=1

![2023-02-28 (3)](https://user-images.githubusercontent.com/106903132/221871421-950db1bd-b6d5-4d3c-8e39-974713ec8181.png)

Case 2:Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
https://bank-branches.vercel.app/api/branch?limit=1&q=LONI&offset=0

![2023-02-28 (2)](https://user-images.githubusercontent.com/106903132/221871702-24773356-fbe4-4b9a-878c-4947633e2f1d.png)

USING POSTGRESQL:

Case 1:Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
http://localhost:3000/api/search?q=MUMBAI&limit=2&offst=1
![2023-02-28 (6)](https://user-images.githubusercontent.com/106903132/221878838-7caf3dba-3ef8-4831-bcc1-240b9b3faca0.png)


Case 2:Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
http://localhost:3000/api/branch?q=LONI&limit=1&offset=0
![2023-02-28 (5)](https://user-images.githubusercontent.com/106903132/221878660-184a22fb-61cb-4550-9e4f-e1bdecefb073.png)

USING MONGODB:
Case 1:Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.
http://localhost:3000/api/search?q=MUMBAI&limit=2&offst=1
![2023-02-28 (6)](https://user-images.githubusercontent.com/106903132/221878838-7caf3dba-3ef8-4831-bcc1-240b9b3faca0.png)


Case 2:Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset
http://localhost:3000/api/branch?q=LONI&limit=1&offset=0
![2023-02-28 (5)](https://user-images.githubusercontent.com/106903132/221878660-184a22fb-61cb-4550-9e4f-e1bdecefb073.png)

