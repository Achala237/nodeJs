const add = require('../scripts/routes/add');
const chai = require('chai');
const expect = chai.expect;

describe('Test suit', function () {
  it('Test the add method', () => {
    expect(add(1, 2)).to.be.equal(3);
  });
});
