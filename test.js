'use strict';
var assert = require('assert');
var yodaSaid = require('./index');


it('should get return at least one quote', function (cb) {
		assert(yodaSaid);
		cb();
});
