# grunt-escomplex-report

[![NPM version](https://badge.fury.io/js/grunt-escomplex-report.png)](http://badge.fury.io/js/grunt-escomplex-report) [![Build Status](https://travis-ci.org/prantlf/grunt-escomplex-report.svg?branch=master)](https://travis-ci.org/prantlf/grunt-escomplex-report) [![Coverage Status](https://coveralls.io/repos/github/prantlf/grunt-escomplex-report/badge.svg?branch=master)](https://coveralls.io/github/prantlf/grunt-escomplex-report?branch=master) [![Dependency Status](https://david-dm.org/prantlf/grunt-escomplex-report.svg)](https://david-dm.org/prantlf/grunt-escomplex-report) [![devDependency Status](https://david-dm.org/prantlf/grunt-escomplex-report/dev-status.svg)](https://david-dm.org/prantlf/grunt-escomplex-report#info=devDependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/prantlf/grunt-escomplex-report.svg)](https://greenkeeper.io/) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM Downloads](https://nodei.co/npm/grunt-escomplex-report.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-escomplex-report)

Software complexity analysis for JavaScript projects.

# Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [Task Options](#task-options)
  - [Task Data](#task-data)
  - [Loading](#loading)
- [Build](#build)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## Installation

You need [node >= 4][node], [npm] and [grunt >= 0.4.5][Grunt] installed
and your project build managed by a [Gruntfile] with the necessary modules
listed in [package.json]. If you haven't used Grunt before, be sure to check out the [Getting Started] guide, as it
explains how to create a Gruntfile as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this
command:

```shell
$ npm install grunt-escomplex-report --save-dev
```

## Configuration

Add the `escomplex-report` entry with the task configuration to the options of the `grunt.initConfig` method:

```js
grunt.initConfig({
  'escomplex-report': {
    all: {
      src: ['../../src/**/!(*.spec)+(.js)'],
      options: {
        output: 'complexity.txt'
      }
    }
  }
});
```

Default options support the most usual usage scenario:

```js
'escomplex-report': {
  options: {
    format: 'plain',
    output: null,
    onlyfailures: true,
    silent: false,
    newmi: true,
    force: false
  },
  ...
}
```

### Task Options

#### force
Type: `Boolean`
Default value: false

If set to `true`, it suppresses complexity failures. Instead of making the Grunt fail, the errors will be written only to the console.

#### format: <format>
Type: `String`
Default value: null

Specify the output format of the report.

#### output <path>
Type: `String`
Default value: null

Specify an output file for the report.

#### ignoreerrors
Type: `Boolean`
Default value: false

Ignore parser errors.

#### maxfiles <number>
Type: `Number`
Default value: 1024

Specify the maximum number of files to have open at any point.

#### maxfod <first-order density>
Type: `Number`
Default value: null

Specify the per-project first-order density threshold.

#### maxcost <change cost>
Type: `Number`
Default value: null

Specify the per-project change cost threshold.

#### maxsize <core size>
Type: `Number`
Default value: null

Specify the per-project core size threshold.

#### minmi <maintainability index>
Type: `Number`
Default value: null

Specify the per-module maintainability index threshold.

#### maxcyc <cyclomatic complexity>
Type: `Number`
Default value: null

Specify the per-function cyclomatic complexity threshold.

#### maxcycden <cyclomatic density>
Type: `Number`
Default value: null

Specify the per-function cyclomatic complexity density threshold.

#### maxhd <halstead difficulty>
Type: `Number`
Default value: null

Specify the per-function Halstead difficulty threshold.

#### maxhv <halstead volume>
Type: `Number`
Default value: null

Specify the per-function Halstead volume threshold.

#### maxhe <halstead effort>
Type: `Number`
Default value: null

Specify the per-function Halstead effort threshold.

#### onlyfailures
Type: `Boolean`
Default value: true

Report only modules and functions, which failed the complexity checks.

#### silent
Type: `Boolean`
Default value: false

Do not write any output to the console.

#### logicalor
Type: `Boolean`
Default value: false

Cisregard operator || as source of cyclomatic complexity.

#### switchcase
Type: `Boolean`
Default value: false

Disregard switch statements as source of cyclomatic complexity.

#### forin
Type: `Boolean`
Default value: false

Treat for...in statements as source of cyclomatic complexity.

#### trycatch
Type: `Boolean`
Default value: false

Treat catch clauses as source of cyclomatic complexity.

#### newmi
Type: `Boolean`
Default value: true

Use the Microsoft-variant maintainability index (scale of 0 to 100).

#### nocoresize
Type: `Boolean`
Default value: false

Do not calculate core size or visibility matrix.

### Task Data

#### src
Type: `String|Array|Object`
Default value: []

Source files to have their complexity checked. Grunt file list specification.

### Loading

Load the plugin in `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-escomplex-report');
```

## Build

Call the `escomplex-report` task:

```shell
$ grunt escomplex-report
```

or integrate it to your build sequence in `Gruntfile.js`:

```js
grunt.registerTask('default', ['escomplex-report', ...]);
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test
your code using Grunt.

## Release History

 * 2018-05-03  [v1.0.1]  Fixed installation if NPM proxy cache is used
 * 2018-04-27  [v1.0.0]  Dropped support of Node.js 4
 * 2018-01-29  [v0.0.1]  Initial release

## License

Copyright (c) 2018 Ferdinand Prantl

Licensed under the MIT license.

[node]: https://nodejs.org
[npm]: https://npmjs.org
[package.json]: https://docs.npmjs.com/files/package.json
[Grunt]: https://gruntjs.com
[Gruntfile]: https://gruntjs.com/sample-gruntfile
[Getting Gtarted]: https://github.com/gruntjs/grunt/wiki/Getting-started
[v0.0.1]: https://github.com/prantlf/grunt-escomplex-report/releases/tag/v0.0.1
[v1.0.0]: https://github.com/prantlf/grunt-escomplex-report/releases/tag/v1.0.0
[v1.0.1]: https://github.com/prantlf/grunt-escomplex-report/releases/tag/v1.0.1
