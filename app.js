const express = require('express');
const app = express();

//Router files
const routerMain = require('./routers/main.js')

//url
app.use('/', routerMain);

app.set('view engine', 'ejs');


//server Up
app.listen(3000, () => console.log('Server running port 3000...'));
app.use((req, res, next) => {
    res.status(404).render('error/error404');
})

