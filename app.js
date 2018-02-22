import createServer	from  './config/server';
import dbConf		from  './config/db';
import app		from  './config/app';
import apiRoutes	from  './API/routes/index';
import bodyParser	from  'body-parser';

const port	= '3000';
const server	= createServer(app, port);
app.use(bodyParser.json());
// mount routes
app.use('/api', apiRoutes);

server.listen(port);
console.log('server listening on port ' + port);
