import diaries from '../models/data';
 
class Diary {
  static getDiary(req, res) {
    return res.status(200).json({ diaries });
  }

  static getSpecificDiary(req, res) {
    diaries.forEach((diary) => {
      if (parseInt(req.params.id, 10) !== diary.id) {
        throw new Error(`${diary} is not a valid id`);
      }
      res.status(200).json({ diary });
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
}

export default Diary;
