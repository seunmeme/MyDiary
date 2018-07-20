import chai, { request, expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';
import diaries from '../models/data';

chai.use(chaiHttp);


describe('API Endpoints', () => {
  it('should list all diaries on GET /diaries', (done) => {
    request(app)
      .get('/api/v1/diaries')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        done();
      });
  });
  it('should get a specific diary on GET /diaries/:id', (done) => {
    request(app)
      .get(`/api/v1/diaries/${diaries[2].id}`)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        done();
      });
  });
  it('should add a new diary on POST /diaries', (done) => {
    request(app)
      .post('/api/v1/api/diaries')
      .send({
        title: 'New Diary',
        content: 'This is from test',
      })
      .end((err, res) => {
        expect(res).to.be.an('object');
        done();
      });
  });

  it('should modify a specific diary on PUT /diaries/:id', (done) => {
    request(app)
      .put(`/api/v1/diaries/${diaries[3].id}`)
      .send({
        title: 'New Diary',
        content: 'This is from test',
      })
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.an('object');
        done();
      });
  });
});
