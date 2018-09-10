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
    return cloudinary.v2.api.resources({type: 'upload', prefix: 'homepage'}).then(result  => res.send(result));
});

app.listen(port);
console.log('App is listening on port ' + port);
