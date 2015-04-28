'use strict';

var test = require('tape');
var increment = require('./');

test('it works', function (t) {
	var actual = increment(1);

	t.plan(1);
	t.equals(actual, 2);
});
