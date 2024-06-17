const express = require('express');

//init app and middleware
const app = express();
const port = 3000;

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Server is running at port ${port}.`);
});


//routes
app.get("/student", (req,res) => {
    res.json({mssg:"Welcome to the API."})
})