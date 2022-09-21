const express = require('express');
const app = express();
const path = require('path');

//Files
const PATH_TO_CLIENT = '/Users/andrew/Documents/Skeletons/client/vanilla';
const index = 'index.html';

//ENV Config
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
})


//Send index page to user
app.get('/', function(req, res) {
  //res.sendFile(path.join(__dirname, index));
  res.sendFile(path.join(PATH_TO_CLIENT, index));
});

//Routes
var exampleRouter = require('./routers/Router_Example.js');
app.use('/example', exampleRouter);