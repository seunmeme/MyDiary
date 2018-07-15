import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';

import { app } from '../app';
import diaries from '../models/data';

chai.use(chaiHttp);

// beforeEach((done) => {
//   diaries
//   done();
//   });

describe('API Endpoints', () => {
  it('should list all diaries on GET /diaries', (done) => {
    request(app)
      .get('/diaries')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        done();
      });
  });
  it('should get a specific diary on GET /diaries/:id');
  // , (done) => {
  // request(app)
  //   .get('/diaries/:id')
  //   .end((err, res) => {
  //     expect(res).to.be.an('object');
  //     done();
  //   }); }

  it('should add a new diary on POST /diaries', (done) => {
    request(app)
      .post('/api/diaries')
      .send({
        title: 'bar U Stasi',
        content: 'Easy to prepare',
      })
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });
  it('should modify a specific diary on PUT /diaries/:id');
});
