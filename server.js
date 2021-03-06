const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const indexRouter = require('./routes/index')

app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout');

app.use(indexRouter)
app.use(expressLayout);
app.use(express.static('public'));


app.listen(process.env.PORT || 3000);