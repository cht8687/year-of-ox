var yearOfRat = require('./');
var test = require('tape');

test('it should check if a year is year of rat', function(t) {
  t.plan(4);
  t.equal(yearOfRat(1985), true, "1984 is year of ox");
  t.equal(yearOfRat(1986), false, "1985 is not year of ox");
  t.equal(yearOfRat(new Date(1997, 0)), true, "1997 is year of rat");
  t.equal(typeof yearOfRat() === 'boolean', true);
});
