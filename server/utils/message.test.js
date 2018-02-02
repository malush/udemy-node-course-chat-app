var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Ivan';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeDefined();
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
  })
});
