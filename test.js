Initialize a new Node.js project: Open your terminal and run the following commands to create a new directory and initialize a Node.js project:
 
mkdir hello-bangladesh
cd hello-bangladesh
npm init -y
Install Express: Install the Express framework to handle HTTP requests:
 
npm install express
Create the application: Create a file named app.js and add the following code:
 
const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => {
  res.send('Hello, Bangladesh!');
});
 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
Run the application: Start the server by running the following command in your terminal:
 
node app.js
Access the application: Open your web browser and go to http://localhost:3000. You should see "Hello, Bangladesh!" displayed on the page.