/*
 * macros.js: Test macros for `utile` module.
 *
 * (C) 2011, Nodejitsu Inc.
 * MIT LICENSE
 *
 */

var assert = require('assert');

var macros = exports;

macros.assertReadCorrectJson = function (obj) {
  assert.isObject(obj);
  assert.deepEqual(obj, {
    hello: 'World',
    'I am': ['the utile module'],
    thisMakesMe: {
      really: 1337,
      'right?': true
    }
  });
};

macros.assertDirectoryRequired = function (obj) {
  assert.isObject(obj);
  assert.deepEqual(obj, {
    directory: {
      me: 'directory/index.js'
    },
    helloWorld: {
      me: 'helloWorld.js'
    }
  });
};

