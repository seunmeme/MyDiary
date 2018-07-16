import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import Diary from './controller/diaries';

const PORT = 3000;
const app = express();

app.set('json spaces', 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to MyDiary API',
}));

// API routes
app.get('/api/v1/diaries', Diary.getDiary);
app.get('/api/v1/diaries/:id', Diary.getSpecificDiary);
app.post('/api/v1/diaries', Diary.createDiary);
app.put('/api/v1/diaries/:id', Diary.updateDiary);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;
