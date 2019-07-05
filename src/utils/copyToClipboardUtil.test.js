import { copyToClipboard } from './copyToClipboardUtil';

describe('copyToClipboard', () => {
  it('should save "Copy me like Im Dolly" string to clipboard', () => {
    const textToCopyToClipboard = 'Copy me like Im Dolly'
    const newToClipboard = copyToClipboard(textToCopyToClipboard);
    expect(newToClipboard).toEqual(undefined);
  })
})
