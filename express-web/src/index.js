//importart express
const express = require('express');
const morgan = require('morgan');
const taskRoutes = require('./routes/routes');

//inciar el servidor
const app = express();

//settings
app.set('port', 4500);

//milddleware
app.use(express.json());
app.use(morgan('dev'));
app.use(taskRoutes);


//escucha del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

