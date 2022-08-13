const express = require("express");
const port = 3000;


const app = express();


app.listen(port, function(err){
    if(err)
    {
        console.log("Error in starting the server", err);
        return;
    }
    console.log("Server is up and running on port: ", port);
    return;

})


