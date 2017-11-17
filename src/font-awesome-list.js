/*
 * Copyright (C) 2017 Alasdair Mercer, !ninja
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var icons = require('../data/icons.json');
var pkg = require('../package.json');

var map = {};
icons.forEach(function(icon) {
  map[icon.id] = icon;

  if (icon.aliases) {
    icon.aliases.forEach(function(alias) {
      map[alias] = icon;
    });
  }
});

/**
 * Returns all of the FontAwesome icons.
 *
 * @return {Object[]} The icons.
 * @public
 */
function all() {
  return icons.slice();
}

/**
 * Returns the FontAwesome icon with the specified <code>id</code>.
 *
 * <code>id</code> can even be an alias but it must always exactly match. To be safe, always specify using lower case.
 *
 * A hash lookup is used to find the match icon, so it's really fast.
 *
 * This method will return <code>null</code> if no icon could be found for <code>id</code>.
 *
 * @param {string} id - the ID (or alias) of the FontAwesome icon to be returned
 * @return {?Object} The FontAwesome icon with <code>id</code> or <code>null</code> if none could be found.
 * @public
 */
function get(id) {
  return Object.prototype.hasOwnProperty.call(map, id) ? map[id] : null;
}

/**
 * Returns the FontAwesome version.
 *
 * @return {string} The version.
 * @public
 */
function version() {
  return pkg.version;
}

module.exports = {
  all: all,
  get: get,
  version: version
};
