import diaries from '../models/data';

class Diary {
  static getDiary(req, res) {
    return res.status(200).json({ diaries });
  }
}

export default Diary;
