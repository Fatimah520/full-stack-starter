const assert = require('assert');
const HttpStatus = require('http-status-codes');
const _ = require('lodash');
const session = require('supertest-session');

const helper = require('../../helper');
const app = require('../../../app');
const models = require('../../../models');

describe('/api/bowls', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['bowls', 'users']);
    testSession = session(app);
  });

  describe('GET /', () => {
    it('returns a list of bowls', async () => {
      const response = await testSession.get('/api/bowls').expect(HttpStatus.OK);
      const items = response.body;
      assert.deepStrictEqual(items.length, 2);
    });
  });

  describe('GET /:id', () => {
    it('returns one bowls by id', async () => {
      const response = await testSession.get('/api/bowls/1').expect(HttpStatus.OK);
      const bowl = response.body;
      assert.deepStrictEqual(bowl.Title, 'Test1');
      assert.deepStrictEqual(bowl.Subtitle, 'hello1');
      assert.deepStrictEqual(bowl.Tagline, 'join1');
      assert.deepStrictEqual(bowl.Image, 'welcome1');
    });

    it('returns NOT FOUND for an id not in the database', async () => {
      await testSession.get('/api/bowls/0').expect(HttpStatus.NOT_FOUND);
    });
  });

  context('authenticated', () => {
    beforeEach(async () => {
      await testSession
        .post('/api/auth/login')
        .set('Accept', 'application/json')
        .send({ email: 'admin.user@test.com', password: 'abcd1234' })
        .expect(HttpStatus.OK);
    });

    describe('POST /', () => {
      it('creates a new Item', async () => {
        const response = await testSession
          .post('/api/bowls')
          .set('Accept', 'application/json')
          .send({
            Title: 'Test1',
            Subtitle: 'hello1',
            Tagline: 'join1',
            Image: 'welcome1',
          })
          .expect(HttpStatus.CREATED);

        const { id, Title, Subtitle, Tagline, Image } = response.body;
        assert(id);
        assert.deepStrictEqual(Title, 'Test1');
        assert.deepStrictEqual(Subtitle, 'hello1');
        assert.deepStrictEqual(Tagline, 'join1');
        assert.deepStrictEqual(Image, 'welcome1');

        const item = await models.Bowl.findByPk(id);
        assert(item);
        assert.deepStrictEqual(item.Title, 'Test1');
        assert.deepStrictEqual(item.Subtitle, 'hello1');
        assert.deepStrictEqual(item.Tagline, 'join1');
        assert.deepStrictEqual(item.Image, 'welcome1');
      });
    });
  });
});
