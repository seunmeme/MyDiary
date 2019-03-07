import express from 'express';
import Diary from '../controller/diaries';
import Entries from '../controller/controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200)
    .send({
      message: 'Welcome to MyDiary API',
    });
});

router.post('/entries', Entries.createEntries);
router.get('/diaries', Diary.getDiary);
router.get('/diaries/:id', Diary.getSpecificDiary);
router.post('/diaries', Diary.createDiary);
router.put('/diaries/:id', Diary.updateDiary);


export default router;
