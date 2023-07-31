const { mockConfig } = require('@myscope/test-util');

mockConfig();  // `config.get(...)` will always return 'xyz'

const { consume } = require('./index.js');

describe('issue reproduction', () => {
  it('should mock', () => {
    // `consume` should use the mocked `config` library but calls the real
    // `config.get` instead, which pulls the value from `config/test.js`
    expect(consume()).toBe('xyz');
  });
});
