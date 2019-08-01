import stripStringForHtmlUtil from './stripStringForHtmlUtil';

describe('stripStringForHtmlUtil', () => {
  it('should return string without html tags', () => {
    const testString = '<p><b>Test </b>, æøå i html tags</p>';
    const expectedString = 'Test , æøå i html tags'
    const testStringResult = stripStringForHtmlUtil(testString)
    expect(testStringResult).toBe(expectedString);
  })
  it('should return string without html tags', () => {
    const testString = '<p><b>Test </b>, æøå i html tags</p> <img onerror="alert(\'could run arbitrary JS here\')" src=bogus>';
    const expectedString = 'Test , æøå i html tags '
    const testStringResult = stripStringForHtmlUtil(testString)
    expect(testStringResult).toBe(expectedString);
  })
  it('should return string if only a string is sent', () => {
    const testString = 'Test is best with hest';
    const expectedString = 'Test is best with hest';
    const testStringResult = stripStringForHtmlUtil(testString)
    expect(testStringResult).toBe(expectedString);
  })
})