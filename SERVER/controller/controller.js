import client from '../models/index';

class Entries {
  static createEntries(req, res) {
    const results = [];

    const data = { title: req.body.title, content: req.body.content };
    // Reconnecting the client that was disconnected in '..models/index.js'
    client.connect()

    // SQL Query > Insert Data
    client.query('INSERT INTO entries(title, content) values($1, $2)',
      [data.title, data.complete]);
    // SQL Query > Select Data
    const query = client.query('SELECT * FROM entries ORDER BY id ASC');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', (done) => {
      done();
      if (!req.body || !req.body.title || !req.body.content) {
        return res.status(404).json({
          message: 'failed',
          error: 'true',
        });
      }
      return res.status(200).json(results);
    });
  }


//   static getSpecificDiary(req, res) {
//     diaries.forEach((diary) => {
//       if (diary.id === parseInt(req.params.id, 10)) {
//         res.status(200).json({ diary });
//       }
//     });
//     return res.status(404).json({
//       message: 'diary not found',
//       error: true,
//     });
//   }

//   static createDiary(req, res) {
//     if (!req.body || !req.body.title || !req.body.content) {
//       return res.status(404).json({
//         message: 'failed',
//         error: 'true',
//       });
//     }
//     diaries.push({
//       id: diaries.length + 1,
//       title: req.body.title,
//       content: req.body.content,
//       createdAt: new Date(),
//     });
//     return res.status(200).json({
//       diaries,
//       message: 'success',
//       error: false,
//     });
//   }

//   static updateDiary(req, res) {
//     diaries.forEach((diary) => {
//       if (diary.id === parseInt(req.params.id, 10)) {
//         diary.title = req.body.title;
//         diary.content = req.body.content;
//         res.status(200).json({
//           diary,
//           message: 'success',
//           error: false,
//         });
//       }
//     });
//     return res.status(404).json({
//       message: 'diary not found',
//       error: true,
//     });
//   }
}

export default Entries;
