const express = require('express');
const app = express();
const port = 3001;
const projectRouter = require('./router/project')
const mysqlConnect = require('./nodejs/mysql')
const cors = require('cors');
// let router = require('./router/main')(app);/

app.use(cors())
app.use(express.json())

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/project', projectRouter);


var server = app.listen(port, function () {
    console.log("Express server has started on port " + port)
});
