import diaries from '../models/data';

class Diary {
  static getDiary(req, res) {
    return res.status(200).json({ diaries });
  }

  static getSpecificDiary(req, res) {
    diaries.forEach((diary) => {
      if (diary.id === parseInt(req.params.id, 10)) {
        res.status(200).json({ diary });
      }
    });
    return res.status(404).json({
      message: 'diary not found',
      error: true,
    });
  }

  static createDiary(req, res) {
    diaries.push({
      id: diaries.length + 1,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
    });
    res.status(200).json({
      diaries,
      message: 'success',
      error: false,
    });
  }

  static updateDiary(req, res) {
    diaries.forEach((diary) => {
      if (diary.id === parseInt(req.params.id, 10)) {
        diary.title = req.body.title;
        diary.content = req.body.content;
        res.status(200).json({
          diary,
          message: 'success',
          error: false,
        });
      }
    });
    return res.status(404).json({
      message: 'diary not found',
      error: true,
    });
  }
}

export default Diary;
