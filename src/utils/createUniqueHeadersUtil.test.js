import createUniqueHeaders from './createUniqueHeadersUtil';

const h2listArray = [{
  "innerText": "Bakgrunn",}, {
  "innerText": "Bakgrunn",}, {
  "innerText": "Forebyggende arbeid",}, {
  "innerText": "Arbeid bidrar til raskere bedring",}, {
  "innerText": "3 søk",}, {
  "innerText": "3 søk",}, {
  "innerText": "3 søk",}, {
  "innerText": "Ti råd for et inkluderende arbeidsliv",}, {
  "innerText": "Rapporter om arbeid og psykisk helse",}, {
  "innerText": "Søk tilskudd innen arbeid og psykisk helse",}]


describe('createUniqueHeaders', () => {
  it('returns list of headings with unique ids, should add prefix if duplicate and "header-" if a number at the beginning ', () => {
    const result = [{
      "id": "bakgrunn",
      "onclick": expect.any(Function),
      "innerText": "Bakgrunn"
    }, {
      "id": "bakgrunn-1",
      "onclick": expect.any(Function),
      "innerText": "Bakgrunn"
    }, {
      "id": "forebyggende-arbeid",
      "onclick": expect.any(Function),
      "innerText": "Forebyggende arbeid"
    }, {
      "id": "arbeid-bidrar-til-raskere-bedring",
      "onclick": expect.any(Function),
      "innerText": "Arbeid bidrar til raskere bedring"
    }, {
      "id": "header-3-sok",
      "onclick": expect.any(Function),
      "innerText": "3 søk"
    }, {
      "id": "header-3-sok-1",
      "onclick": expect.any(Function),
      "innerText": "3 søk"
    }, {
      "id": "header-3-sok-2",
      "onclick": expect.any(Function),
      "innerText": "3 søk"
    }, {
      "id": "ti-raad-for-et-inkluderende-arbeidsliv",
      "onclick": expect.any(Function),
      "innerText": "Ti råd for et inkluderende arbeidsliv"
    }, {
      "id": "rapporter-om-arbeid-og-psykisk-helse",
      "onclick": expect.any(Function),
      "innerText": "Rapporter om arbeid og psykisk helse"
    }, {
      "id": "sok-tilskudd-innen-arbeid-og-psykisk-helse",
      "onclick": expect.any(Function),
      "innerText": "Søk tilskudd innen arbeid og psykisk helse"
    }]

    const newH2List = createUniqueHeaders(h2listArray);
    expect(newH2List).toEqual(result);
  })
})
