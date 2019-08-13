const express = require('express');
const morgan = require ('morgan');
// requiriendo rutas
const routes = require('./routes')

const app = express();

// Settings
app.set('appName','Server');
app.set('views', __dirname+'/views') 
 
app.set('view engine','ejs');
     

// middlewares
app.use(morgan('dev'));

// rutas
app.use(routes);

app.listen(5500, ()=>{
     console.log('Server in 3000');
     console.log('Name: ',app.get('appName'));
});

