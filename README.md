# backbone-emulate-collection

[![Travis build status](http://img.shields.io/travis/marionettejs/backbone-emulate-collection.svg?style=flat)](https://travis-ci.org/marionettejs/backbone-emulate-collection)
[![Code Climate](https://codeclimate.com/github/marionettejs/backbone-emulate-collection/badges/gpa.svg)](https://codeclimate.com/github/marionettejs/backbone-emulate-collection)
[![Test Coverage](https://codeclimate.com/github/marionettejs/backbone-emulate-collection/badges/coverage.svg)](https://codeclimate.com/github/marionettejs/backbone-emulate-collection)
[![Dependency Status](https://david-dm.org/marionettejs/backbone-emulate-collection.svg)](https://david-dm.org/marionettejs/backbone-emulate-collection)

Mix in methods from Underscore, for iteration, and other collection related features. Borrowing this code from [Backbone.Collection](https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L962).

It works by taking an object and a property field, in this example 'list',
and appending collection functions to the object so that it can
delegate collection calls to its list.

#### Object Literal
```js
var obj = {
  list: [1, 2, 3]
}

emulateCollection(obj, 'list');

var double = function(v){ return v*2; };
console.log(obj.map(double)); // [2, 4, 6]
```

#### Function Prototype
```js
var Func = function(list) {
  this.list = list;
};

emulateCollection(Func.prototype, 'list');
var func = new Func([1,2,3]);

var double = function(v){ return v*2; };
console.log(func.map(double)); // [2, 4, 6]
```

For more information about the proxied methods, see the [Underscore.js documentation](http://underscorejs.org).
