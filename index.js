const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressHBS = require('express-handlebars');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.engine('hbs',expressHBS({defaultLayout:'layout',extname:'.hbs'}))
app.set('view engine','.hbs');


app.use('/',require('./routes/index'));

const PORT = 5005
app.listen(PORT,() =>{
    console.log('Server is running on port 5005');
})
