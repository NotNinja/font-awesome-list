# font-awesome-list

[font-awesome-list](https://github.com/NotNinja/font-awesome-list) is a [Node.js](https://nodejs.org) module for getting
the list of all icons provided by [FontAwesome](http://fontawesome.io).

[![Build Status](https://img.shields.io/travis/NotNinja/font-awesome-list/develop.svg?style=flat-square)](https://travis-ci.org/NotNinja/font-awesome-list)
[![Dev Dependency Status](https://img.shields.io/david/dev/NotNinja/font-awesome-list.svg?style=flat-square)](https://david-dm.org/NotNinja/font-awesome-list?type=dev)
[![License](https://img.shields.io/npm/l/font-awesome-list.svg?style=flat-square)](https://github.com/NotNinja/font-awesome-list/blob/master/LICENSE.md)
[![Release](https://img.shields.io/npm/v/font-awesome-list.svg?style=flat-square)](https://www.npmjs.com/package/font-awesome-list)

* [Install](#install)
* [API](#api)
* [Bugs](#bugs)
* [Contributors](#contributors)
* [License](#license)

## Install

Install using `npm`:

``` bash
$ npm install --save font-awesome-list
```

The version of this library will always match the version of [FontAwesome](http://fontawesome.io) whose icons are
listed.

## API

### `all()`

Returns all of the FontAwesome icons.

``` javascript
var fontAwesomeList = require('font-awesome-list');

fontAwesomeList.all();
//=> [ { name: "Glass", id: "glass", unicode: "f000", created: 1, filter: [ "martini", "drink", "bar", "alcohol", "liquor" ], categories: [ "Web Application Icons" ] }, ... ]
```

### `get(id)`

Returns the FontAwesome icon with the specified `id`.

`id` can even be an alias but it must always exactly match. To be safe, always specify using lower case.

A hash lookup is used to find the match icon, so it's really fast.

This method will return `null` if no icon could be found for `id`.

``` javascript
var fontAwesomeList = require('font-awesome-list');

fontAwesomeList.get('git');
//=> { name: "Git", id: "git", unicode: "f1d3", created: 4.1, categories: [ "Brand Icons" ] }
fontAwesomeList.get('fa');
//=> { name: "Font Awesome", id: "font-awesome", unicode: "f2b4", created: 4.6, aliases: [ "fa" ], categories: [ "Brand Icons" ] }
fontAwesomeList.get('unknown');
//=> null
```

### `version()`

Returns the FontAwesome version.

``` javascript
var fontAwesomeList = require('font-awesome-list');

fontAwesomeList.version();
//=> "4.7.0"
```

## Bugs

If you have any problems with this library or would like to see changes currently in development you can do so
[here](https://github.com/NotNinja/font-awesome-list/issues).

## Contributors

If you want to contribute, you're a legend! Information on how you can do so can be found in
[CONTRIBUTING.md](https://github.com/NotNinja/font-awesome-list/blob/master/CONTRIBUTING.md). We want your suggestions
and pull requests!

A list of contributors can be found in
[AUTHORS.md](https://github.com/NotNinja/font-awesome-list/blob/master/AUTHORS.md).

## License

See [LICENSE.md](https://github.com/NotNinja/font-awesome-list/raw/master/LICENSE.md) for more information on our MIT
license.

[![Copyright !ninja](https://cdn.rawgit.com/NotNinja/branding/master/assets/copyright/base/not-ninja-copyright-186x25.png)](https://not.ninja)
