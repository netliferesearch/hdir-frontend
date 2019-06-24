import createUniqueHeaders from './createUniqueHeadersUtil';

const h2listArray = [{
  "innerText": "Bakgrunn",
  "appendChild": jest.fn(),
}, {
  "innerText": "Bakgrunn",
  "appendChild": jest.fn(),
}, {
  "innerText": "Forebyggende arbeid",
  "appendChild": jest.fn(),
}, {
  "innerText": "Arbeid bidrar til raskere bedring",
  "appendChild": jest.fn(),
}, {
  "innerText": "3 søk",
  "appendChild": jest.fn(),
}, {
  "innerText": "3 søk",
  "appendChild": jest.fn(),
}, {
  "innerText": "3 søk",
  "appendChild": jest.fn(),
}, {
  "innerText": "Ti råd for et inkluderende arbeidsliv",
  "appendChild": jest.fn(),
}, {
  "innerText": "Rapporter om arbeid og psykisk helse",
  "appendChild": jest.fn(),
}, {
  "innerText": "Søk tilskudd innen arbeid og psykisk helse",
  "appendChild": jest.fn(),
}]

describe('createUniqueHeaders', () => {
  it('returns list of headings with unique ids, should add prefix if duplicate and "header-" if a number at the beginning ', () => {
    const result = [{
      "innerText": "Bakgrunn",
      "id": "bakgrunn",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Bakgrunn",
      "id": "bakgrunn-1",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Forebyggende arbeid",
      "id": "forebyggende-arbeid",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Arbeid bidrar til raskere bedring",
      "id": "arbeid-bidrar-til-raskere-bedring",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "3 søk",
      "id": "header-3-sok",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "3 søk",
      "id": "header-3-sok-1",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "3 søk",
      "id": "header-3-sok-2",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Ti råd for et inkluderende arbeidsliv",
      "id": "ti-raad-for-et-inkluderende-arbeidsliv",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Rapporter om arbeid og psykisk helse",
      "id": "rapporter-om-arbeid-og-psykisk-helse",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }, {
      "innerText": "Søk tilskudd innen arbeid og psykisk helse",
      "id": "sok-tilskudd-innen-arbeid-og-psykisk-helse",
      "className": " js-show-copy-icon",
      "appendChild": expect.any(Function)
    }]
    const newH2List = createUniqueHeaders(h2listArray);
    expect(newH2List).toEqual(result);
  })
})
