const Requests = require('supertest');
const expect = require('chai').expect;

const app = require('../app')

const api = new Requests(app);

describe('Welcome route', () => {
  it('should correctly load the welcome route', (done) => {
    api.get('/')
      .end((error,res) => {
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text).message).to.be.equal('Welcome to Population Management System');
        done();
      });
  });
});
