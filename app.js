//ALWAYS NEED:
//const express = require('express');
//const app = express();
//app.listen(3000);

const express = require('express');
//creating new instance of express class(server) instantiating express
const app = express();
//creating route within Express
//Get takes 2 parameters
// app.get('/', (request, response) => {
// REQUEST is what the client sent to you. It lets you access THAT request. i.e. "give me google.com this is devan allara".  RESPONSE is what you're sending back

app.get('/', (req, res) => {
// creating a response
res.send("Hello World! 🤓");
});

app.get('/about', (req, res) => {
    res.send("about us");
});

app.get('/help', (req, res) => {
    res.send("help page")
});

app.get('/contact', (req, res) => {
    res.send('contact us');
});




app.listen(3000);
console.log("hello 2")
console.log()