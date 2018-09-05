const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, '/homepage/build')));

//handle api calls
app.get('/api/ping', (req,res) => {
    return res.send({ express: "pong"});
});

app.get('/api/picturedata', (req,res) => {
    console.log("sending picture data");
    return res.send({ data: "hei"});
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'homepage/build', 'index.html'));
});



app.listen(port);
console.log('App is listening on port ' + port);
