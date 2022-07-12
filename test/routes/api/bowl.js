describe('GET /'), () => {};
it('returns a list of Bowls', async () => {
  const response = await testSession.get('/api/bowls').expect(HttpsStatus.OK);
  const bowls = response.body;
  assert.deepStrictEqual(items.length, 2);
});
