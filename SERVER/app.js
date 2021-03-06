import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from './routes/route';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.set('json spaces', 4);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', router);
app.get('*', (req, res) => {
  res.status(404)
    .send();
});
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;
