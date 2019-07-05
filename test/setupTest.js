// Initiate JEST with some global functions
global.window.scrollTo = jest.fn()
global.window.scrollIntoView = jest.fn()
global.document.getSelection = jest.fn(() => ({rangeCount:0}))
global.document.execCommand = jest.fn();
