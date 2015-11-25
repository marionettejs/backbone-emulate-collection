// backbone-emulate-collection
// ----------------------------------
// v0.1.0
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('underscore')) : typeof define === 'function' && define.amd ? define(['underscore'], factory) : global.emulateCollection = factory(global._);
})(this, function (_) {
  'use strict';

  // Mix in methods from Underscore, for iteration, and other
  // collection related features.
  // Borrowing this code from Backbone.Collection:
  // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L962

  var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'toArray', 'first', 'initial', 'rest', 'last', 'without', 'isEmpty', 'pluck', 'reduce'];

  var emulateCollection = function emulateCollection(object, listProperty) {
    _.each(methods, function (method) {
      object[method] = function () {
        var list = _.values(_.result(this, listProperty));
        var args = [list].concat(_.toArray(arguments));
        return _[method].apply(_, args);
      };
    });
  };

  var backbone_emulate_collection = emulateCollection;

  return backbone_emulate_collection;
});
// http://marionettejs.com
//# sourceMappingURL=backbone-emulate-collection.js.map
