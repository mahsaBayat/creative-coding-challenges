import hello from '../src';

describe('hello()', () => {
  it('should say "Hello, Wordl!"', () => {
    expect(hello()).toBe('Hello, World!');
  });
});
