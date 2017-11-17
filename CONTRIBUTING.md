# Contributing

If you have any questions about [font-awesome-list](https://github.com/NotNinja/font-awesome-list) please feel free to
[raise an issue](https://github.com/NotNinja/font-awesome-list/issues/new).

Please [search existing issues](https://github.com/NotNinja/font-awesome-list/issues) for the same feature and/or issue
before raising a new issue. Commenting on an existing issue is usually preferred over raising duplicate issues.

Please ensure that all files conform to the coding standards, using the same coding style as the rest of the code base.
All unit tests should be updated and passing as well. All of this can easily be checked via command-line:

``` bash
# install/update package dependencies
$ npm install
# run test suite
$ npm test
```

You must have at least [Node.js](https://nodejs.org) version 4 or newer installed.

The icon data set should only be built for each new version of [FontAwesome](http://fontawesome.io), so this only needs
to be done once per release:

``` bash
# update data/icons.json
$ npm run build
```

It will pull the latest data from the [FontAwesome GitHub repository](https://github.com/FortAwesome/Font-Awesome) based
on the version within our own `package.json` file.

All pull requests should be made to the `develop` branch.

Don't forget to add your details to the list of
[AUTHORS.md](https://github.com/NotNinja/font-awesome-list/blob/master/AUTHORS.md) if you want your contribution to be
recognized by others.
