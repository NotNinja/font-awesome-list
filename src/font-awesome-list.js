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

var map = {};
icons.forEach(function(icon) {
  map[icon.id] = icon;
});

/**
 * Returns the FontAwesome icon with the specified <code>id</code>.
 *
 * This method will return <code>null</code> if no icon could be found for <code>id</code>.
 *
 * @param {string} id - the ID of the FontAwesome icon to be returned
 * @return {?Object} The FontAwesome icon with <code>id</code> or <code>null</code> if none could be found.
 * @public
 */
function getIcon(id) {
  return Object.prototype.hasOwnProperty.call(map, id) ? map[id] : null;
}

/**
 * Returns all of the FontAwesome icons.
 *
 * @return {Object[]} The icons.
 * @public
 */
function getIcons() {
  return icons;
}

module.exports = getIcons;
module.exports.get = getIcon;
