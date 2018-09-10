var cloudinary = require('cloudinary');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

cloudinary.config({
    cloud_name: 'ollicolli',
    api_key: '215194685648969',
    api_secret: 'SECRET'
});

//handle api calls
app.get('/api/ping', (req,res) => {
    return res.send({ express: "pong"});
});

app.get('/api/picturedata', (req,res) => {
    cloudinary.v2.api.resources({type: 'upload', prefix: 'homepage'}, function(error, result){console.log(result);});
    return res.send({ data: "hei"});
});

app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'homepage/build', 'index.html'));
});

app.listen(port);
console.log('App is listening on port ' + port);
