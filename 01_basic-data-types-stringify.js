const age = 39;
console.log(`age = ${JSON.stringify(age)}`);

const fullName = 'Larson Richard';
console.log(`fullName = ${JSON.stringify(fullName)}`);

const tags = ['json', 'rest', 'api', 'oauth'];
console.log(`tags = ${JSON.stringify(tags)}`);

const registered = true;
console.log(`registered = ${JSON.stringify(registered)}`);

const speaker = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'aaa@gmail.com',
  about: 'AAA',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true,
};
console.log(`speaker = ${JSON.stringify(speaker)}`);

const serializeSpeaker = (key, value) => {
  return (typeof value === 'string' || Array.isArray(value)) ? undefined : value;
}
console.log(`Speaker (pretty print) : \n ${JSON.stringify(speaker, null, 2)}`);
console.log(`Speaker without String and Arrays : \n ${JSON.stringify(speaker, serializeSpeaker, 2)}`);

const speaker2 = {
  firstName: 'Larson',
  lastName: 'Richard',
  email: 'aaa@gmail.com',
  about: 'AAA',
  company: 'Ecratic',
  tags: ['json', 'rest', 'api', 'oauth'],
  registered: true,
  toJSON: function() {
    return 'Hi there!'
  },
};
console.log(`speker.toJSON() : ${JSON.stringify(speaker2, null, 2)}`);