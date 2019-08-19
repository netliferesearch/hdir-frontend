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
  // Wrote these tests after it was reported as a bug, but it's not a bug.
  // The URL fragment was not being parsed through 'buildId' function,
  // hence the error with Norwegian characters on inline links expected to open
  // parsed 'h2' links with fragments
  describe(`'buildId' for paragraphs`, () => {
    it(`build id out of "§ 4. Forsvarlighet"`, () => {
      const text = `§ 4. Forsvarlighet`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-4.-forsvarlighet');
    })
    it(`build id out of "§ 5. Bruk av medhjelpere"`, () => {
      const text = `§ 5. Bruk av medhjelpere`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-5.-bruk-av-medhjelpere');
    })
    it(`build id out of "§ 6. Ressursbruk"`, () => {
      const text = `§ 6. Ressursbruk`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-6.-ressursbruk');
    })
    it(`build id out of "§ 7. Øyeblikkelig hjelp"`, () => {
      const text = `§ 7. Øyeblikkelig hjelp`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-7.-oyeblikkelig-hjelp');
    })
    it(`build id out of "§ 8. Pliktmessig avhold"`, () => {
      const text = `§ 8. Pliktmessig avhold`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-8.-pliktmessig-avhold');
    })
    it(`build id out of "§ 9. Forbud mot gaver m.v. i tjenesten"`, () => {
      const text = `§ 9. Forbud mot gaver m.v. i tjenesten`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-9.-forbud-mot-gaver-m.v.-i-tjenesten');
    })
    it(`build id out of "§ 10. Informasjon til pasienter m.v."`, () => {
      const text = `§ 10. Informasjon til pasienter m.v.`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-10.-informasjon-til-pasienter-m.v.');
    })
    it(`build id out of "§ 10a. Helsepersonells plikt til å bidra til å ivareta mindreårige barn som pårørende"`, () => {
      const text = `§ 10a. Helsepersonells plikt til å bidra til å ivareta mindreårige barn som pårørende`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-10a.-helsepersonells-plikt-til-aa-bidra-til-aa-ivareta-mindreaarige-barn-som-paarorende');
    })
    it(`build id out of "§ 10b. Helsepersonells plikt til å bidra til å ivareta mindreårige barn som er etterlatte etter foreldre eller søsken"`, () => {
      const text = `§ 10b. Helsepersonells plikt til å bidra til å ivareta mindreårige barn som er etterlatte etter foreldre eller søsken`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-10b.-helsepersonells-plikt-til-aa-bidra-til-aa-ivareta-mindreaarige-barn-som-er-etterlatte-etter-foreldre-eller-sosken');
    })
    it(`build id out of "§ 11. Rekvirering av reseptbelagte legemidler"`, () => {
      const text = `§ 11. Rekvirering av reseptbelagte legemidler`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-11.-rekvirering-av-reseptbelagte-legemidler');
    })
    it(`build id out of "§ 12. Undersøkelser i forbindelse med straffbare forhold"`, () => {
      const text = `§ 12. Undersøkelser i forbindelse med straffbare forhold`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-12.-undersokelser-i-forbindelse-med-straffbare-forhold');
    })
    it(`build id out of "§ 12a. Undersøkelser mv. etter pålegg fra Statens undersøkelseskommisjon for helse- og omsorgstjenesten"`, () => {
      const text = `§ 12a. Undersøkelser mv. etter pålegg fra Statens undersøkelseskommisjon for helse- og omsorgstjenesten`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-12a.-undersokelser-mv.-etter-paalegg-fra-statens-undersokelseskommisjon-for-helse--og-omsorgstjenesten');
    })
    it(`build id out of "§ 13. Markedsføring"`, () => {
      const text = `§ 13. Markedsføring`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-13.-markedsforing');
    })
    it(`build id out of "§ 14. Beordring av helsepersonell til vaktordninger"`, () => {
      const text = `§ 14. Beordring av helsepersonell til vaktordninger`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-14.-beordring-av-helsepersonell-til-vaktordninger');
    })
    it(`build id out of "§ 15. Krav til attester, erklæringer o.l."`, () => {
      const text = `§ 15. Krav til attester, erklæringer o.l.`;
      const theBuiltId = buildId(text);
      const encodedId = encodeURI(theBuiltId);
      expect(encodedId).toBe('%C2%A7-15.-krav-til-attester,-erklaeringer-o.l.');
    })
  });
})
