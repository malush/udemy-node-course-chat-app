var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 2;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`
    var locationMessage = generateLocationMessage(from, latitude, longitude)

    expect(locationMessage.createdAt).toBeDefined();
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe(url);
  })
})
