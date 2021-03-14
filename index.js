const express = require('express');
const app = express();

var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS


app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));


app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('App listening on port!'));

