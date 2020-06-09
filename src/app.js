var createError = require('http-errors');
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const ejs = require('ejs')
require('./db/mongoose')


const  app = express()
const port = process.env.PORT || 5000

var indexRouter = require('./routes/index')
var stateRouter = require('./routes/state')


const publicDirectorypath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','ejs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())
app.use(express.static( publicDirectorypath))


//routers
app.use('/', indexRouter);
app.use('/state', stateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

app.listen(port,()=>{
    console.log('server started on port '+ port)
})