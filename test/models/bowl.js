const assert = require('assert');

const helper = require('../helper');
const models = require('../../models');

describe('models.bowls', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['bowls']);
  });

  it('creates a new Item record', async () => {
    let item = models.bowls.build({
      Name: 'Test Title',
      short: 'This is longer test Text.',
    });
    assert.deepStrictEqual(item.id, null);
    await item.save();
    assert(item.id);

    item = await models.bowls.findByPk(item.id);
    assert.deepStrictEqual(item.Name, 'Test Title');
    assert.deepStrictEqual(item.short, 'This is longer test Text.');
  });
  it('returns all the bowls', async () => {
    const results = await models.bowls.findAll();
    assert.deepStrictEqual(results.length, 2);
  });
});
