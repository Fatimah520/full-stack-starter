const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');

describe('/api/bowls', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['bowls']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of bowls', async () => {
      const response = await testSession.get('/api/bowls').expect(HttpStatus.OK);
      const bowls = response.body;
      assert.deepStrictEqual(bowls.length, 2);
    });
  });

  describe('GET /:id', () => {
    it('returns one bowls by id', async () => {
      const response = await testSession.get('/api/bowls/1').expect(HttpStatus.OK);
      const bowl = response.body;
      assert.deepStrictEqual(bowl.Name, 'Test');
      assert.deepStrictEqual(bowl.short, 'hello');
    });

    it('returns NOT FOUND for an id not in the database', async () => {
      await testSession.get('/api/bowls/0').expect(HttpStatus.NOT_FOUND);
    });
  });
});
