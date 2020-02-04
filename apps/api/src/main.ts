import * as express from 'express';
import * as routes from './routes/index';

const app = express();

app.get('/', routes.getDefault);
app.post('/loginline', routes.loginline);
app.listen({ port: 4000 }, () => console.log('Server ready at http://localhost:4000'));