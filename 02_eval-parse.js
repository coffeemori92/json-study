const x = '{ "sessionData": "2014-10-06T13:30:00.000Z" }';
console.log(`Parse with eval(): ${eval(`(${x})`).sessionData}`);
console.log(`Prse with JSON.parse(): ${JSON.parse(x).sessionData}`);