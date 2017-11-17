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

var crypto = require('crypto');
var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');

var list = require('../src/font-awesome-list');

describe('font-awesome-list', function() {
  var icons;

  before(function(done) {
    fs.readFile(path.resolve(__dirname, '../data/icons.json'), 'utf8', function(error, data) {
      if (error) {
        return done(error);
      }

      try {
        icons = JSON.parse(data);
      } catch (e) {
        return done(e);
      }

      return done();
    });
  });

  describe('.all', function() {
    it('should return list of available FontAwesome icons', function() {
      expect(list.all()).to.deep.equal(icons);
    });
    it('should never return empty list', function() {
      expect(list.all()).to.not.deep.equal([]);
    });
  });

  describe('.get', function() {
    it('should return icon with matching id', function() {
      var index = Math.floor(Math.random() * icons.length);
      var expected = icons[index];
      var actual = list.get(expected.id);

      expect(actual).to.deep.equal(expected);
    });

    context('when id is not found', function() {
      var unknownId;

      before(function(done) {
        crypto.randomBytes(3, function(error, buffer) {
          if (error) {
            return done(error);
          }

          unknownId = 'font-awesome-list-' + buffer.toString('hex');

          return done();
        });
      });

      it('should return null', function() {
        expect(list.get(unknownId)).to.equal(null);
      });
    });
  });
});
