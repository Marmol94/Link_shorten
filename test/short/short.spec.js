var expect = require("chai").expect;
var ShortService = require("../../src/services/short.service").ShortService;
var shortLinks = require("../../src/utils/data").shortLinks;

describe('Short test', () => {

  it('Get all short links', () => {
    var z = new ShortService().getAll();
    expect(shortLinks).to.equal(z);
  });
});