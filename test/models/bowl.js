const assert = require('assert');

const helper = require('../helper');

describe('models.Bowls', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['bowls']);
  });

  it('creates a new Item record', async () => {
    let item = models.Bowls.build({
      Title: 'Test1',
      Subtitle: 'hello1',
      Tagline: 'join1',
      Image: 'welcome1',
    });
    assert.deepStrictEqual(item.id, null);
    await item.save();
    assert(item.id);

    item = await models.Bowl.findByPk(item.id);
    assert.deepStrictEqual(item.Title, 'Test1');
    assert.deepStrictEqual(item.Subtitle, 'hello1');
    assert.deepStrictEqual(item.Tagline, 'join1');
    assert.deepStrictEqual(item.Image, 'welcome1');
  });
  it('returns all the bowls', async () => {
    const results = await models.Bowl.findAll();
    assert.deepStrictEqual(results.length, 2);
  });
});
