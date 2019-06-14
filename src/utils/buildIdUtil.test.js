import buildId from './buildIdUtil';

describe('buildId', () => {
  it('build id out of "You got nothing on me"', () => {
    const text = 'You got nothing on me';
    const theBuiltId = buildId(text);
    expect(theBuiltId).toBe('you-got-nothing-on-me');
  })
  it('build id out of "No (big) deal"', () => {
    const text = 'No (big) deal';
    const theBuiltId = buildId(text);
    expect(theBuiltId).toBe('no-big-deal');
  })
  it(`build id out of "12 monkeys don't care and no banana for you!"`, () => {
    const text = `12 monkeys don't care and no banana for you!`;
    const theBuiltId = buildId(text);
    expect(theBuiltId).toBe('header-12-monkeys-dont-care-and-no-banana-for-you');
  })
  it(`build id out of "Åsså ligår æ å ede!"`, () => {
    const text = `Åsså ligår æ å ede!`;
    const theBuiltId = buildId(text);
    expect(theBuiltId).toBe('aassaa-ligaar-ae-aa-ede');
  })
  it(`build id out of "12 monkeys using special character æøå!"`, () => {
    const text = `12 monkeys using special character æøå!`;
    const theBuiltId = buildId(text);
    expect(theBuiltId).toBe('header-12-monkeys-using-special-character-aeoaa');
  })
})
