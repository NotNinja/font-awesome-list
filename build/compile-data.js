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

/* eslint "no-console": "off", "no-process-exit": "off" */

var https = require('https');
var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var pkg = require('../package.json');

var url = 'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/v' + pkg.version + '/src/icons.yml';

https.get(url, function(res) {
  if (res.statusCode !== 200) {
    fail(new Error('Request failed! Status Code: ' + res.statusCode));
  }

  res.setEncoding('utf8');

  var data = '';

  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
    try {
      var parsedData = yaml.safeLoad(data, 'utf8');
      var icons = parsedData.icons;

      if (!isArray(icons)) {
        throw new Error('Invalid icons found: ' + icons);
      }
      if (icons.length === 0) {
        throw new Error('No icons found!');
      }

      var filePath = path.resolve(__dirname, '../data/icons.json');

      fs.writeFileSync(filePath, JSON.stringify(icons), 'utf8');

      console.log('Updated "' + path.basename(filePath) + '" for FontAwesome v' + pkg.version + '!');
    } catch (e) {
      fail(e);
    }
  });
}).on('error', fail);

function fail(error) {
  console.error(error.message);

  process.exit(1);
}

function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
