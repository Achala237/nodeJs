const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Test Apis', function () {
    it('Test user api', (done) => {
      chai
      .request(app)
      .get('/user')
      .set('Content-Type', 'application/json')
      .end(function (err, res) {
        expect(err).not.to.be.an('error');
        expect(res.body).to.deep.equal({ name: 'achala', id: '345' });
        done();
      });
    });
});
