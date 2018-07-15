import diaries from '../models/data';

class Diary {
  static getDiary(req, res) {
    return res.status(200).json({ diaries });
  }

  static getSpecificDiary(req, res) {
    diaries.forEach((diary) => {
      if (diary.id === parseInt(req.params.id, 10)) {
        return res.status(200).json({ diary });
      }
    });
  }
}

export default Diary;
