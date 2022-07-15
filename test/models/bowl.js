const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.Bowl', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['bowls']);
  });

  it('creates a new Bowl record', async () => {
    let item = models.Bowl.build({
      Title: 'Test Title',
      Subtitle: 'This is longer test Text.',
      Tagline: 'Testing',
      Image: 'Test',
    });
    assert.deepStrictEqual(item.id, null);
    await item.save();
    assert(item.id);

    item = await models.Bowl.findByPk(item.id);
    assert.deepStrictEqual(item.Title, 'Test Title');
    assert.deepStrictEqual(item.Subtitle, 'This is longer test Text.');
    assert.deepStrictEqual(item.Tagline, 'Testing');
    assert.deepStrictEqual(item.Image, 'Test');
  });
  it('returns all the bowls', async () => {
    const results = await models.Bowl.findAll();
    assert.deepStrictEqual(results.length, 2);
  });
});
