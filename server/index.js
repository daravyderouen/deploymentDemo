const express = require("express");//step 9

const path = require('path');//step 10

const app = express()//whatever that function returns step 11

app.get("/", (req, res) => {   //step 15
    res.sendFile(path.join(__dirname, '../index.html'));

}) 














const port = process.env.PORT || 4005 //step 12
app.listen(port, () => {  //step 13
    console.log(`My app is JAMMIN on port number ${port}`)
})
//step 14 run nodemon index.js








